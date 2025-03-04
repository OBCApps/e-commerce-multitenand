import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SA_CategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_CategoriaMast.entity';
import { SA_ItemMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_ItemMast.entity';
import { SA_SubCategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_SubCategoriaMast.entity';
import { In, Like, Repository } from 'typeorm';
import { FilterProductDto } from '../../domains/FilterProductDto';
import { SA_LineaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_LineaMast.entity';
import { SA_ClienteMast } from 'src/api-administracion-core/SA_ClienteMast/entities/SA_ClienteMast.entity';
import { SA_RelacionCaracteristicaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_RelacionCaracteristicaMast';
import { SA_RelacionItemMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_RelacionItemMast.entity';
import { DtoFilters } from '../../domains/DtoFilters';
import { FilterProductDtoList } from '../../domains/FilterProductDtoList';




@Injectable()
export class LandingPageService {
    constructor(
        @InjectRepository(SA_ClienteMast)
        private readonly repository_SA_ClienteMast: Repository<SA_ClienteMast>,

        @InjectRepository(SA_LineaMast)
        private readonly repository_SA_LineaMast: Repository<SA_LineaMast>,

        @InjectRepository(SA_CategoriaMast)
        private readonly repository_SA_CategoriaMast: Repository<SA_CategoriaMast>,

        @InjectRepository(SA_SubCategoriaMast)
        private readonly repository_SA_SubCategoriaMast: Repository<SA_SubCategoriaMast>,

        @InjectRepository(SA_ItemMast)
        private readonly repository_SA_ItemMast: Repository<SA_ItemMast>,

        @InjectRepository(SA_RelacionCaracteristicaMast)
        private readonly repository_SA_RelacionCaracteristicaMast: Repository<SA_RelacionCaracteristicaMast>,

        @InjectRepository(SA_RelacionItemMast)
        private readonly repository_SA_RelacionItemMast: Repository<SA_RelacionItemMast>,

        @Inject('REQUEST') private readonly request: Request,
    ) { }

    async getAllLineasByCliente(): Promise<SA_LineaMast[]> {
        const tenantId = (this.request as any).tenantId;
        return this.repository_SA_LineaMast.find({ where: { id_cliente: tenantId } });
    }

    async getAllCategoriesByLinea(id_linea: string): Promise<SA_CategoriaMast[]> {
        return this.repository_SA_CategoriaMast.find({ where: { id_linea: id_linea } });
    }

    async getAllSubCategoriesByCategory(id_categoria: string): Promise<SA_SubCategoriaMast[]> {
        return this.repository_SA_SubCategoriaMast.find({ where: { id_categoria: id_categoria } });
    }

    async getAllProducts(filter: FilterProductDto): Promise<SA_ItemMast[]> {
        const tenantId = (this.request as any).tenantId;

        const query = this.repository_SA_ItemMast.createQueryBuilder('item')
            .innerJoin('SA_RelacionItemMast', 'relacion_item', 'item.id_item = relacion_item.id_item')
            .innerJoin('SA_LineaMast', 'linea', 'relacion_item.id_linea = linea.id_linea') // Relación corregida

            // Filtrar por cliente obligatorio
            .where('linea.id_cliente = :tenantId', { tenantId });

        // Aplicar filtros solo si se envían
        if (filter.id_linea) {
            query.andWhere('relacion_item.id_linea = :id_linea', { id_linea: filter.id_linea });
        }
        if (filter.id_categoria) {
            query.andWhere('relacion_item.id_categoria = :id_categoria', { id_categoria: filter.id_categoria });
        }
        if (filter.id_subcategoria) {
            query.andWhere('relacion_item.id_subcategoria = :id_subcategoria', { id_subcategoria: filter.id_subcategoria });
        }
        if (filter.nombre) {
            query.andWhere('item.nombre ILIKE :nombre', { nombre: `%${filter.nombre}%` });
        }

        return query.getMany();
    }



    async getAllProductsList(filter: FilterProductDtoList): Promise<SA_ItemMast[]> {
        const tenantId = (this.request as any).tenantId;

        const activeLineas = filter.lineas.filter(linea => linea.active).map(linea => linea.id_linea);
        const activeCategorias = filter.categorias.filter(categoria => categoria.active).map(categoria => categoria.id_categoria);
        const activeSubcategorias = filter.subcategorias.filter(subcategoria => subcategoria.active).map(subcategoria => subcategoria.id_subcategoria);
        const activeMarcas = filter.marcas.filter(marca => marca.active).map(marca => marca.id_caracteristica);

        const relacion = await this.repository_SA_RelacionItemMast.createQueryBuilder('item')
            .innerJoin('SA_LineaMast', 'linea', 'item.id_linea = linea.id_linea')
            .innerJoin('SA_RelacionCaracteristicaMast', 'caracteristica', 'item.id_item = caracteristica.id_item')
            .where('linea.id_cliente = :tenantId', { tenantId })
            .andWhere(activeLineas.length ? 'item.id_linea IN (:...activeLineas)' : '1=1', { activeLineas })
            .andWhere(activeCategorias.length ? 'item.id_categoria IN (:...activeCategorias)' : '1=1', { activeCategorias })
            .andWhere(activeSubcategorias.length ? 'item.id_subcategoria IN (:...activeSubcategorias)' : '1=1', { activeSubcategorias })
            .andWhere(activeMarcas.length ? 'caracteristica.id_caracteristica IN (:...activeMarcas)' : '1=1', { activeMarcas })
            .getMany();

        const result = await this.repository_SA_ItemMast.find({
            where: { id_item: In(relacion.map(item => item.id_item)) }
        });

        return result;
    }

    async getAllFilters(filter: DtoFilters): Promise<any> {
        const tenantId = (this.request as any).tenantId;

        const lineas = await this.repository_SA_LineaMast.find({ where: { id_cliente: tenantId } });

        let categorias;
        if (filter.id_linea) {
            categorias = await this.repository_SA_CategoriaMast.find({
                where: { id_linea: filter.id_linea }
            });
        } else {
            categorias = await this.repository_SA_CategoriaMast.find({
                where: { id_linea: In(lineas.map(item => item.id_linea)) }
            });
        }

        let subcategorias;
        if (filter.id_categoria) {
            subcategorias = await this.repository_SA_SubCategoriaMast.find({
                where: { id_categoria: filter.id_categoria }
            });
        } else {
            subcategorias = await this.repository_SA_SubCategoriaMast.find({
                where: { id_categoria: In(categorias.map(item => item.id_categoria)) }
            });
        }


        /* const marcas = await this.repository_SA_RelacionCaracteristicaMast.find({
            where: {
                id_linea: In(lineas.map(item => item.id_linea)),
                id_categoria: In(categorias.map(item => item.id_categoria)),
                id_subcategoria: In(subcategorias.map(item => item.id_subcategoria))

            }
        }); */

        const data = {
            lineas: lineas,
            categorias: categorias,
            subcategorias: subcategorias,
            // marcas: marcas
        };

        return data;
    }


    async getProductByNameRoute(name_route: string): Promise<SA_ItemMast> {
        return this.repository_SA_ItemMast.findOne({ where: { name_route: name_route } });
    }
}