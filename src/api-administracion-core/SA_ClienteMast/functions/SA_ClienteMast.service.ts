import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SA_ClienteMast } from '../entities/SA_ClienteMast.entity';


import { CreateClienteDto } from '../domains/CreateClienteDto';
import { UpdateClienteDto } from '../domains/UpdateClienteDto';

@Injectable()
export class SA_ClienteMastService {
    constructor(
        @InjectRepository(SA_ClienteMast)
        private readonly repository: Repository<SA_ClienteMast>,

        @Inject('REQUEST') private readonly request: Request
    ) { }

    async create(createClienteDto: CreateClienteDto): Promise<SA_ClienteMast> {
        const cliente = this.repository.create(createClienteDto);
        return this.repository.save(cliente);
    }

    async findAll(): Promise<SA_ClienteMast[]> {
        return this.repository.find();
    }

    async findByDomain(id: string): Promise<SA_ClienteMast> {
        return this.repository.findOne({
            where: { domain: id },
        });
    }

    async findOne(id: string): Promise<SA_ClienteMast> {
        return this.repository.findOne({
            where: { id_cliente: id },
        });
    }

    async update(id: string, updateClienteDto: UpdateClienteDto): Promise<SA_ClienteMast> {
        const client = await this.repository.findOne({ where: { id_cliente: id } });

        if (!client) {
            throw new Error('Client not found');
        }

        await this.repository.update(id, updateClienteDto);
        return this.repository.findOne({ where: { id_cliente: id } });
    }


    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async getTenandIdConfig(): Promise<SA_ClienteMast> {
        const tenantId = (this.request as any).tenantId;
        console.log("tenantId", tenantId);
        const response = await this.repository.findOne({ where: { id_cliente: tenantId } });
        console.log("response", response);
        return response;


    }

}