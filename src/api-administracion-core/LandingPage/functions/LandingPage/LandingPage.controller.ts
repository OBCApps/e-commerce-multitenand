import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post, Headers } from '@nestjs/common';
import { LandingPageService } from './LandingPage.service';
import { FilterProductDto } from '../../domains/FilterProductDto';


@ApiTags('landing-page')
@Controller('landing-page/')
export class LandingPageController {


    constructor(private readonly service: LandingPageService) { }

    @Get('/getAllLineas')
    public async getAllLineas(): Promise<any> {
        try {
            const data = await this.service.getAllLineas();
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Get('/getAllCategories/:id_linea')
    public async getAllCategories(@Param('id_linea') id_linea: string): Promise<any> {
        try {
            const data = await this.service.getAllCategories(id_linea);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Get('/getAllSubCategories/:id_categoria')
    public async getAllSubCategories(@Param('id_categoria') id_categoria: string): Promise<any> {
        try {
            const data = await this.service.getAllSubCategories(id_categoria);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Post('/getAllProducts')
    public async getAllProducts(@Body() filter: FilterProductDto): Promise<any> {
        try {
            const data = await this.service.getAllProducts(filter);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }


}