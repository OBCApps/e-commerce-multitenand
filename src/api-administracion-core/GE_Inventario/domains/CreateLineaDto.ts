import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateLineaDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id_cliente: string;

  
}