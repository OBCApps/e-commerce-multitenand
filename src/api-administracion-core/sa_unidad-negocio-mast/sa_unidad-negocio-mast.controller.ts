import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SaUnidadNegocioMastService } from './sa_unidad-negocio-mast.service';
import { CreateSA_UnidadNegocioMast } from './dto/create-sa_unidad-negocio-mast';

@ApiTags('UNIDAD-NEGOCIO')
@Controller('unidad-negocio')
export class SaUnidadNegocioMastController {

    constructor(private readonly saUnidadNegocioMastService: SaUnidadNegocioMastService) { }
    @ApiOperation({
        summary: 'Get all Unidad Negocio',
        description: 'endpoint to get all Unidad Negocio',
    })
    @Get()
    findAll() {
        return this.saUnidadNegocioMastService.findAll();
    }

    @Post()
    create(@Body() createEventoDto: CreateSA_UnidadNegocioMast) {
        return this.saUnidadNegocioMastService.create(createEventoDto);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEventoDto: CreateSA_UnidadNegocioMast) {
        return this.saUnidadNegocioMastService.update(id, updateEventoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.saUnidadNegocioMastService.remove(id);
    }
}

/* {
    "id_unidadnegocio": 1,
        "nombre": "Coolbox",
            "email": "ventas@coolboz.com",
                "telefono": "987654321",
                    "direccion": "Av. Tecnología 123, Lima, Perú",
                        "fecha_creacion": "2025-01-15 03:08:07.900235"
},

 */