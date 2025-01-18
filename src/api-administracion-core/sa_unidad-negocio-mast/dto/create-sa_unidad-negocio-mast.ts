import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSA_UnidadNegocioMast {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    telefono: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    direccion: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fecha_creacion: Date;
}