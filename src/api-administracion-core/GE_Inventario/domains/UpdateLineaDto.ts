import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLineaDto {
    @ApiProperty()
    @IsString()
    id_linea: string;

    @ApiProperty()
    @IsString()
    id_cliente: string;

    @ApiProperty()
    @IsOptional()
    nombre: string;

    
}