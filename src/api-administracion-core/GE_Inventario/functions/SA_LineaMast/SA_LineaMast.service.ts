import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SA_LineaMast } from '../../entities/SA_LineaMast.entity';
import { UpdateLineaDto } from '../../domains/UpdateLineaDto';
import { CreateLineaDto } from '../../domains/CreateLineaDto';



@Injectable()
export class SA_LineaMastService {
    constructor(
        @InjectRepository(SA_LineaMast)
        private readonly repository: Repository<SA_LineaMast>,
    ) { }

    async create(createDto: CreateLineaDto): Promise<SA_LineaMast> {
        const data = this.repository.create(createDto);
        return this.repository.save(data);
    }

    async findAll(): Promise<SA_LineaMast[]> {
        return this.repository.find();
    }

    async findOne(id: string): Promise<SA_LineaMast> {
        return this.repository.findOne({
            where: { id_linea: id },
        });
    }

    async update(id: string, updateDto: UpdateLineaDto): Promise<SA_LineaMast> {
        const client = await this.repository.findOne({ where: { id_linea: id } });

        if (!client) {
            throw new Error('Client not found');
        }

        await this.repository.update(id, updateDto);
        return this.repository.findOne({ where: { id_linea: id } });
    }


    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}