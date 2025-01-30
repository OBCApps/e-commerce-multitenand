import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SA_CategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_CategoriaMast.entity';
import { SA_ItemMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_ItemMast.entity';
import { SA_SubCategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_SubCategoriaMast.entity';
import { Like, Repository } from 'typeorm';
import { FilterProductDto } from '../../domains/FilterProductDto';
import { SA_LineaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_LineaMast.entity';
import { SA_ClienteMast } from 'src/api-administracion-core/SA_ClienteMast/entities/SA_ClienteMast.entity';




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

        @Inject('REQUEST') private readonly request: Request,
    ) { }

    async getAllLineas(): Promise<SA_LineaMast[]> {
        const tenantId = (this.request as any).tenantId;
        return this.repository_SA_LineaMast.find({ where: { id_cliente: tenantId } });


    }


    async getAllCategories(id_linea: string): Promise<SA_CategoriaMast[]> {
        return this.repository_SA_CategoriaMast.find({ where: { id_linea: id_linea } });
    }

    async getAllSubCategories(id_categoria: string): Promise<SA_SubCategoriaMast[]> {
        return this.repository_SA_SubCategoriaMast.find({ where: { id_categoria: id_categoria } });
    }

    async getAllProducts(filter: FilterProductDto): Promise<SA_ItemMast[]> {
        const tenantId = (this.request as any).tenantId;

        return this.repository_SA_ItemMast.createQueryBuilder('item')
            .innerJoin('SA_LineaMast', 'linea', 'item.id_linea = linea.id_linea')
            .where('linea.id_cliente = :tenantId', { tenantId })
            .andWhere(filter.id_linea ? 'item.id_linea = :id_linea' : '1=1', { id_linea: filter.id_linea })
            .andWhere(filter.id_categoria ? 'item.id_categoria = :id_categoria' : '1=1', { id_categoria: filter.id_categoria })
            .andWhere(filter.id_subcategoria ? 'item.id_subcategoria = :id_subcategoria' : '1=1', { id_subcategoria: filter.id_subcategoria })
            .andWhere(filter.nombre ? 'item.nombre ILIKE :nombre' : '1=1', { nombre: `%${filter.nombre}%` })
            .getMany();

        /* return this.repository_SA_ItemMast.find(
            {
                where: {
                    id_linea: filter.id_linea,
                    id_categoria: filter.id_categoria,
                    id_subcategoria: filter.id_subcategoria,
                    nombre: filter.nombre ? Like(`%${filter.nombre}%`) : undefined,
                }
            }
        ); */
    }
}