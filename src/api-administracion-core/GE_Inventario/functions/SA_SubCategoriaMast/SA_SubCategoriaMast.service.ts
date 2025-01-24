import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SA_SubCategoriaMast } from '../../entities/SA_SubCategoriaMast.entity';
import { CreateSubCategoriaDto } from '../../domains/CreateSubCategoriaDto';
import { UpdateSubCategoriaDto } from '../../domains/UpdateSubCategoriaDto';



@Injectable()
export class SA_SubCategoriaMastService {
    constructor(
        @InjectRepository(SA_SubCategoriaMast)
        private readonly repository: Repository<SA_SubCategoriaMast>,
    ) { }

    async create(createDto: CreateSubCategoriaDto): Promise<SA_SubCategoriaMast> {
        const data = this.repository.create(createDto);
        return this.repository.save(data);
    }

    async findAll(): Promise<SA_SubCategoriaMast[]> {
        return this.repository.find();
    }

    async findOne(id: string): Promise<SA_SubCategoriaMast> {
        return this.repository.findOne({
            where: { id_subcategoria: id },
        });
    }

    async update(id: string, updateDto: UpdateSubCategoriaDto): Promise<SA_SubCategoriaMast> {
        const client = await this.repository.findOne({ where: { id_subcategoria: id } });

        if (!client) {
            throw new Error('Client not found');
        }

        await this.repository.update(id, updateDto);
        return this.repository.findOne({ where: { id_subcategoria: id } });
    }


    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}