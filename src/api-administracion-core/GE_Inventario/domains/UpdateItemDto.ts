import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateItemDto {
    @ApiProperty()
    @IsString()
    id_item: string;

    @ApiProperty()
    @IsString()
    id_cliente: string;

    @ApiProperty()
    @IsOptional()
    nombre: string;

    
}