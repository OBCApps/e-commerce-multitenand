import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SA_LineaMast } from "./SA_LineaMast.entity";
import { SA_SubCategoriaMast } from "./SA_SubCategoriaMast.entity";
import { SA_ItemMast } from "./SA_ItemMast.entity";
import { SA_RelacionItemMast } from "./SA_RelacionItemMast.entity";
import { SA_RelacionCaracteristicaMast } from "./SA_RelacionCaracteristicaMast";

@Entity('SA_CategoriaMast')
export class SA_CategoriaMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_categoria: string;

    // --- ESTABLECER CONEXION CON EL LINEA -> CATEGORIA (UNO A MUCHOS)
    @ApiProperty()
    @ManyToOne(() => SA_LineaMast, (connect) => connect.categorias, { onDelete: 'CASCADE', cascade: true })
    @JoinColumn({ name: 'id_linea' })
    linea: SA_LineaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_linea: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    nombre: string;


    // --- ESTABLECER CONEXION CON LAS SUBCATEGORIAS QUE PUEDE TENER CADA CATEGORIA
    @ApiProperty({ type: () => SA_SubCategoriaMast, isArray: true })
    @OneToMany(() => SA_SubCategoriaMast, (connect) => connect.categoria)
    subcategorias: SA_SubCategoriaMast[];


    // ---- ESTABLECER DIRECTAMENTE CON RELACION-ITEMS
    @ApiProperty({ type: () => SA_RelacionItemMast, isArray: true })
    @OneToMany(() => SA_RelacionItemMast, (connect) => connect.categoria)
    relacionitems: SA_RelacionItemMast[];


    // --- ESTABLECER CONEXION CON LAS CARACTERISTICAS QUE PUEDE TENER CADA LINEA
    @ApiProperty({ type: () => SA_RelacionCaracteristicaMast, isArray: true })
    @OneToMany(() => SA_RelacionCaracteristicaMast, (connect) => connect.categoria)
    relacioncaracteristica: SA_RelacionCaracteristicaMast[];
}
