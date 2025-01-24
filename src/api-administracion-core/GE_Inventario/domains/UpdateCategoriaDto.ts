import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class UpdateCategoriaDto {
    @ApiProperty()
    @IsString()
    id_categoria: string;

    @ApiProperty()
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    id_linea: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre: string;
}