import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SA_CategoriaMast } from '../../entities/SA_CategoriaMast.entity';
import { CreateCategoriaDto } from '../../domains/CreateCategoriaDto';
import { UpdateCategoriaDto } from '../../domains/UpdateCategoriaDto';



@Injectable()
export class SA_CategoriaMastService {
    constructor(
        @InjectRepository(SA_CategoriaMast)
        private readonly repository: Repository<SA_CategoriaMast>,
    ) { }

    async create(createDto: CreateCategoriaDto): Promise<SA_CategoriaMast> {
        const data = this.repository.create(createDto);
        return this.repository.save(data);
    }

    async findAll(): Promise<SA_CategoriaMast[]> {
        return this.repository.find();
    }

    async findOne(id: string): Promise<SA_CategoriaMast> {
        return this.repository.findOne({
            where: { id_categoria: id },
        });
    }

    async update(id: string, updateDto: UpdateCategoriaDto): Promise<SA_CategoriaMast> {
        const client = await this.repository.findOne({ where: { id_categoria: id } });

        if (!client) {
            throw new Error('Client not found');
        }

        await this.repository.update(id, updateDto);
        return this.repository.findOne({ where: { id_categoria: id } });
    }


    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}