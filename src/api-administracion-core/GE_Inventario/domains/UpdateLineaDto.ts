import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLineaDto {
    @ApiProperty()
    @IsString()
    id_cliente: string;

    @ApiProperty()
    @IsOptional()
    nombre: string;

    @ApiProperty()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsOptional()
    telefono: string;

    @ApiProperty()
    @IsOptional()
    direccion: string;

    @ApiProperty()
    @IsOptional()
    fecha_creacion: string;
}