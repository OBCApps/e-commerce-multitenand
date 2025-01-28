import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SA_CategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_CategoriaMast.entity';
import { SA_ItemMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_ItemMast.entity';
import { SA_SubCategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_SubCategoriaMast.entity';
import { Like, Repository } from 'typeorm';
import { FilterProductDto } from '../../domains/FilterProductDto';




@Injectable()
export class LandingPageService {
    constructor(
        @InjectRepository(SA_CategoriaMast)
        private readonly repository_SA_CategoriaMast: Repository<SA_CategoriaMast>,

        @InjectRepository(SA_SubCategoriaMast)
        private readonly repository_SA_SubCategoriaMast: Repository<SA_SubCategoriaMast>,

        @InjectRepository(SA_ItemMast)
        private readonly repository_SA_ItemMast: Repository<SA_ItemMast>,
    ) { }


    async getAllCategories(id_linea: string): Promise<SA_CategoriaMast[]> {
        return this.repository_SA_CategoriaMast.find({ where: { id_linea: id_linea } });
    }

    async getAllSubCategories(id_categoria: string): Promise<SA_SubCategoriaMast[]> {
        return this.repository_SA_SubCategoriaMast.find({ where: { id_categoria: id_categoria } });
    }

    async getAllProducts(filter: FilterProductDto): Promise<SA_ItemMast[]> {
        return this.repository_SA_ItemMast.find(
            {
                where: {
                    id_linea: filter.id_linea,
                    id_categoria: filter.id_categoria,
                    id_subcategoria: filter.id_subcategoria,
                    nombre: filter.nombre ? Like(`%${filter.nombre}%`) : undefined,
                }
            }
        );
    }
}