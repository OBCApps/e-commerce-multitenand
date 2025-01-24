import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class UpdateSubCategoriaDto {
    @ApiProperty()
    @IsString()
    id_categoria: string;

    @ApiProperty()
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    id_subcategoria: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre: string;
}