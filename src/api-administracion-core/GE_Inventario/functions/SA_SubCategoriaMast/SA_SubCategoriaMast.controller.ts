import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSubCategoriaDto } from '../../domains/CreateSubCategoriaDto';
import { UpdateSubCategoriaDto } from '../../domains/UpdateSubCategoriaDto';
import { SA_SubCategoriaMastService } from './SA_SubCategoriaMast.service';



@ApiTags('subcategoria-mast')
@Controller('administrate/sa_subcategoriamast/')
export class SA_SubCategoriaMastController {


    constructor(private readonly service: SA_SubCategoriaMastService) { }

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
    public async create(@Body() createDto: CreateSubCategoriaDto): Promise<any> {
        try {
            const createdDto = await this.service.create(createDto);
            return { status: 201, data: createdDto };
        } catch (error) {
            throw new Error('Error creating ');
        }
    }


    @Patch('/update')
    public async update(@Body() updateDto: UpdateSubCategoriaDto): Promise<any> {
        try {
            const updatedDto = await this.service.update(updateDto.id_categoria, updateDto);
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