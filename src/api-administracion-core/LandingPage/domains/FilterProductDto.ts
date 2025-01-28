import { ApiProperty } from "@nestjs/swagger";

export class FilterProductDto {
    @ApiProperty()
    id_linea: string;

    @ApiProperty()
    id_categoria: string;

    @ApiProperty()
    id_subcategoria: string;

    @ApiProperty()
    nombre: string;
}