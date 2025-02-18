import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SA_CategoriaMast } from "./SA_CategoriaMast.entity";
import { SA_ItemMast } from "./SA_ItemMast.entity";
import { SA_RelacionItemMast } from "./SA_RelacionItemMast.entity";
import { SA_RelacionCaracteristicaMast } from "./SA_RelacionCaracteristicaMast";

@Entity('SA_SubCategoriaMast')
export class SA_SubCategoriaMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_subcategoria: string;

    // --- ESTABLECER CONEXION CON EL CLIENTE -> LINEA (UNO A MUCHOS)
    @ApiProperty()
    @ManyToOne(() => SA_CategoriaMast, (connect) => connect.subcategorias, { onDelete: 'CASCADE', cascade: true })
    @JoinColumn({ name: 'id_categoria' })
    categoria: SA_CategoriaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_categoria: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    nombre: string;


    // ---- ESTABLECER DIRECTAMENTE CON RELACION - ITEMS
    @ApiProperty({ type: () => SA_RelacionItemMast, isArray: true })
    @OneToMany(() => SA_RelacionItemMast, (connect) => connect.subcategoria)
    relacionitems: SA_RelacionItemMast[];


    // --- ESTABLECER CONEXION CON LAS CARACTERISTICAS QUE PUEDE TENER CADA LINEA
    @ApiProperty({ type: () => SA_RelacionCaracteristicaMast, isArray: true })
    @OneToMany(() => SA_RelacionCaracteristicaMast, (connect) => connect.subcategoria)
    relacioncaracteristica: SA_RelacionCaracteristicaMast[];

}
