import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class CreateSubCategoriaDto {
    @ApiProperty()
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    id_categoria: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre: string;
}