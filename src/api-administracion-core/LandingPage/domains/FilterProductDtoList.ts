import { ApiProperty } from "@nestjs/swagger";

export class FilterProductDtoList {
    @ApiProperty({ type: () => [] })
    lineas: any[];

    @ApiProperty({ type: () => [] })
    categorias: any[];

    @ApiProperty({ type: () => [] })
    subcategorias: any[];

    @ApiProperty({ type: () => [] })
    marcas: any[];
}