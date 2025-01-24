import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SA_CategoriaMastService } from './SA_CategoriaMast.service';

import { UpdateLineaDto } from '../../domains/UpdateLineaDto';
import { CreateCategoriaDto } from '../../domains/CreateCategoriaDto';
import { UpdateCategoriaDto } from '../../domains/UpdateCategoriaDto';


@ApiTags('categoria-mast')
@Controller('administrate/sa_categoriamast/')
export class SA_CategoriaMastController {


    constructor(private readonly service: SA_CategoriaMastService) { }

    @Get('/all')
    public async getAll(): Promise<any> {
        try {
            const data = await this.service.findAll();
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Post('/register')
    public async create(@Body() createDto: CreateCategoriaDto): Promise<any> {
        try {
            const createdDto = await this.service.create(createDto);
            return { status: 201, data: createdDto };
        } catch (error) {
            throw new Error('Error creating ');
        }
    }


    @Patch('/update')
    public async update(@Body() updateDto: UpdateCategoriaDto): Promise<any> {
        try {
            const updatedDto = await this.service.update(updateDto.id_categoria, updateDto);
            if (updatedDto) {
                return { status: 200, data: updatedDto };
            } else {
                return { status: 404, message: 'Client not found' };
            }
        } catch (error) {
            throw new Error(error.message || 'Error updating client');
        }
    }



    @Delete('/delete/:id')
    public async delete(@Param('id') id: string): Promise<any> {
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