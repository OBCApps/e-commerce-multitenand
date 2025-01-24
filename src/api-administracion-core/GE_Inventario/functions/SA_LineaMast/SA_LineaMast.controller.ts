import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SA_LineaMastService } from './SA_LineaMast.service';
import { CreateLineaDto } from '../../domains/CreateLineaDto';
import { UpdateLineaDto } from '../../domains/UpdateLineaDto';


@ApiTags('linea-mast')
@Controller('administrate/sa_lineamast/')
export class SA_LineaMastController {


    constructor(private readonly service: SA_LineaMastService) { }

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
    public async create(@Body() createDto: CreateLineaDto): Promise<any> {
        try {
            const createdDto = await this.service.create(createDto);
            return { status: 201, data: createdDto };
        } catch (error) {
            throw new Error('Error creating ');
        }
    }


    @Patch('/update')
    public async update(@Body() updateDto: UpdateLineaDto): Promise<any> {
        try {
            const updatedDto = await this.service.update(updateDto.id_linea, updateDto);
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