import { ApiProperty } from "@nestjs/swagger";

export class DtoFilters {
    @ApiProperty()
    id_linea: string;

    @ApiProperty()
    id_categoria: string;

    @ApiProperty()
    id_subcategoria: string;

    @ApiProperty()
    id_caracteristica: string;
}