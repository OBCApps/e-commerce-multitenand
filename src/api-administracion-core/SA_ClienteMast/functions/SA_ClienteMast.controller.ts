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
            const data = await this.service.findAll();
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    /* @Get('/tenandId/:domain')
    public async getTenandId(@Param('tenandId') tenandId: string): Promise<any> {
        try {
            const data = await this.service.findOne(tenandId);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    } */

    @Get('/tenandId/config')
    public async getTenandIdConfig(): Promise<any> {
        try {
            const data = await this.service.getTenandIdConfig();
            return { status: 200, data: data.config };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Post('/register')
    public async create(@Body() createDto: CreateClienteDto): Promise<any> {
        try {
            const createdDto = await this.service.create(createDto);
            return { status: 201, data: createdDto };
        } catch (error) {
            throw new Error('Error creating ');
        }
    }


    @Patch('/update')
    public async update(@Body() updateDto: UpdateClienteDto): Promise<any> {
        try {
            const updatedDto = await this.service.update(updateDto.id_cliente, updateDto);
            if (updatedDto) {
                return { status: 200, data: updatedDto };
            } else {
                return { status: 404, message: ' not found' };
            }
        } catch (error) {
            throw new Error(error.message || 'Error updating ');
        }
    }



    @Delete('/delete/:id')
    public async delete(@Param('id') id: string): Promise<any> {
        try {

            await this.service.remove(id);
            return { status: 200, message: ' deleted successfully' };
        } catch (error) {
            if (error.message === ' not found') {
                return { status: 404, message: ' not found' };
            } else {
                throw new Error('Error deleting ');
            }
        }
    }

}