import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SA_ClienteMast } from '../entities/SA_ClienteMast.entity';


import { CreateClienteDto } from '../domains/CreateClienteDto';
import { UpdateClienteDto } from '../domains/UpdateClienteDto';

@Injectable()
export class SA_ClienteMastService {
    constructor(
        @InjectRepository(SA_ClienteMast)
        private readonly clienteRepository: Repository<SA_ClienteMast>,
    ) { }

    async create(createClienteDto: CreateClienteDto): Promise<SA_ClienteMast> {
        const cliente = this.clienteRepository.create(createClienteDto);
        return this.clienteRepository.save(cliente);
    }

    async findAll(): Promise<SA_ClienteMast[]> {
        return this.clienteRepository.find();
    }

    async findOne(id: string): Promise<SA_ClienteMast> {
        return this.clienteRepository.findOne({
            where: { id_cliente: id },
        });
    }

    async update(id: string, updateClienteDto: UpdateClienteDto): Promise<SA_ClienteMast> {
        const client = await this.clienteRepository.findOne({ where: { id_cliente: id } });

        if (!client) {
            throw new Error('Client not found');
        }

        await this.clienteRepository.update(id, updateClienteDto);
        return this.clienteRepository.findOne({ where: { id_cliente: id } });
    }


    async remove(id: string): Promise<void> {
        await this.clienteRepository.delete(id);
    }
}