import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SA_RelacionCaracteristicaMast } from "./SA_RelacionCaracteristicaMast";


@Entity('SA_CaracteristicasMast')
export class SA_CaracteristicaMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_caracteristica: string;

    // Características principales de la tabla
    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    nombre: string;


    // --- ESTABLECER CONEXION CON LAS SUBCATEGORIAS QUE PUEDE TENER CADA CATEGORIA
    @ApiProperty({ type: () => SA_RelacionCaracteristicaMast, isArray: true })
    @OneToMany(() => SA_RelacionCaracteristicaMast, (connect) => connect.caracteristica)
    relacioncaracteristica: SA_RelacionCaracteristicaMast[];
    /* 
        // ---- ESTABLECER DIRECTAMENTE CON RELACION - ITEMS
        @ApiProperty({ type: () => SA_RelacionItemMast, isArray: true })
        @OneToMany(() => SA_RelacionItemMast, (connect) => connect.item)
        relacionitems: SA_RelacionItemMast[]; */
}
