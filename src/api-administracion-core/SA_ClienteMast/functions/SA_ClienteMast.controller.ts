import { Request, Response } from 'express';
import { SA_ClienteMastService } from './SA_ClienteMast.service';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateClienteDto } from '../domains/CreateClienteDto';
import { UpdateClienteDto } from '../domains/UpdateClienteDto';

@ApiTags('cliente-mast')
@Controller('administrate/sa_clientemast/')
export class SA_ClienteMastController {


    constructor(private readonly service: SA_ClienteMastService) { }

    @Get('/all')
    public async getAll(): Promise<any> {
        try {
            const clients = await this.service.findAll();
            return { status: 200, data: clients };
        } catch (error) {
            return { status: 500, message: 'Error retrieving clients', error };
        }
    }

    @Post('/register')
    public async create(@Body() createDto: CreateClienteDto): Promise<any> {
        try {
            const createdClient = await this.service.create(createDto);
            return { status: 201, data: createdClient };
        } catch (error) {
            throw new Error('Error creating client');
        }
    }


    @Patch('/update')
    public async updateClient(@Body() clientUpdates: UpdateClienteDto): Promise<any> {
        try {
            const updatedClient = await this.service.update(clientUpdates.id_cliente, clientUpdates);
            if (updatedClient) {
                return { status: 200, data: updatedClient };
            } else {
                return { status: 404, message: 'Client not found' };
            }
        } catch (error) {
            throw new Error(error.message || 'Error updating client');
        }
    }



    @Delete('/delete/:id')
    public async deleteClient(@Param('id') id: string): Promise<any> {
        try {

            await this.service.remove(id);
            return { status: 200, message: 'Client deleted successfully' };
        } catch (error) {
            if (error.message === 'Client not found') {
                return { status: 404, message: 'Client not found' };
            } else {
                throw new Error('Error deleting client');
            }
        }
    }

}