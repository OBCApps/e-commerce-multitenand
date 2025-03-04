import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post, Headers, HttpCode } from '@nestjs/common';
import { LandingPageService } from './LandingPage.service';
import { FilterProductDto } from '../../domains/FilterProductDto';
import { DtoFilters } from '../../domains/DtoFilters';
import { FilterProductDtoList } from '../../domains/FilterProductDtoList';


@ApiTags('landing-page')
@Controller('landing-page/')
export class LandingPageController {


    constructor(private readonly service: LandingPageService) { }

    @Get('/getAllLineasByCliente')
    public async getAllLineas(): Promise<any> {
        try {
            const data = await this.service.getAllLineasByCliente();
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Get('/getAllCategoriesByLinea/:id_linea')
    public async getAllCategoriesByLinea(@Param('id_linea') id_linea: string): Promise<any> {
        try {
            const data = await this.service.getAllCategoriesByLinea(id_linea);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Get('/getAllSubCategoriesByCategory/:id_categoria')
    public async getAllSubCategoriesByCategory(@Param('id_categoria') id_categoria: string): Promise<any> {
        try {
            const data = await this.service.getAllSubCategoriesByCategory(id_categoria);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Post('/getAllProducts')
    @HttpCode(200)
    public async getAllProducts(@Body() filter: FilterProductDto): Promise<any> {
        try {
            const data = await this.service.getAllProducts(filter);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }


    @Post('/getAllProductsList')
    public async getAllProductsList(@Body() filter: FilterProductDtoList): Promise<any> {
        try {
            const data = await this.service.getAllProductsList(filter);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Post('/getAllFilters')
    public async getAllFilters(@Body() filter: DtoFilters): Promise<any> {
        try {
            const data = await this.service.getAllFilters(filter);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Post('/getAllProductsFilter')
    public async getAllProductsFilter(@Body() filter: FilterProductDto): Promise<any> {
        try {
            const data = await this.service.getAllProducts(filter);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }

    @Get('/getProductByNameRoute/:name_route')
    public async getProductByNameRoute(@Param('name_route') name_route: string): Promise<any> {
        try {
            const data = await this.service.getProductByNameRoute(name_route);
            return { status: 200, data: data };
        } catch (error) {
            return { status: 500, message: 'Error retrieving ', error };
        }
    }
}