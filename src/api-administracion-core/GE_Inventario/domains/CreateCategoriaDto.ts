import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString } from 'class-validator';

export class CreateCategoriaDto {
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