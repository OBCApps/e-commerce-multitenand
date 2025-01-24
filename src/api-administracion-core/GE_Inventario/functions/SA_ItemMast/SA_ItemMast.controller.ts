import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SA_ItemMastService } from './SA_ItemMast.service';
import { CreateItemDto } from '../../domains/CreateItemDto';
import { UpdateItemDto } from '../../domains/UpdateItemDto';


@ApiTags('item-mast')
@Controller('administrate/sa_itemmast/')
export class SA_ItemMastController {


    constructor(private readonly service: SA_ItemMastService) { }

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
    public async create(@Body() createDto: CreateItemDto): Promise<any> {
        try {
            const createdDto = await this.service.create(createDto);
            return { status: 201, data: createdDto };
        } catch (error) {
            throw new Error('Error creating ');
        }
    }


    @Patch('/update')
    public async update(@Body() updateDto: UpdateItemDto): Promise<any> {
        try {
            const updatedDto = await this.service.update(updateDto.id_item, updateDto);
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