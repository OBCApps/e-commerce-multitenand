import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SA_ItemMast } from '../../entities/SA_ItemMast.entity';
import { CreateItemDto } from '../../domains/CreateItemDto';
import { UpdateItemDto } from '../../domains/UpdateItemDto';




@Injectable()
export class SA_ItemMastService {
    constructor(
        @InjectRepository(SA_ItemMast)
        private readonly repository: Repository<SA_ItemMast>,
    ) { }

    async create(createDto: CreateItemDto): Promise<SA_ItemMast> {
        const data = this.repository.create(createDto);
        return this.repository.save(data);
    }

    async findAll(): Promise<SA_ItemMast[]> {
        return this.repository.find();
    }

    async findOne(id: string): Promise<SA_ItemMast> {
        return this.repository.findOne({
            where: { id_item: id },
        });
    }

    async update(id: string, updateDto: UpdateItemDto): Promise<SA_ItemMast> {
        const client = await this.repository.findOne({ where: { id_item: id } });

        if (!client) {
            throw new Error('Client not found');
        }

        await this.repository.update(id, updateDto);
        return this.repository.findOne({ where: { id_item: id } });
    }


    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}