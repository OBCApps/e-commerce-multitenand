import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    telefono: string;

    @ApiProperty()
    direccion: string;

    @ApiProperty()
    fecha_creacion: string;
}