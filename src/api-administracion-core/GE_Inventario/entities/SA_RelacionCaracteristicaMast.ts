import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SA_SubCategoriaMast } from "./SA_SubCategoriaMast.entity";
import { SA_LineaMast } from "./SA_LineaMast.entity";
import { SA_CategoriaMast } from "./SA_CategoriaMast.entity";
import { SA_ItemMast } from "./SA_ItemMast.entity";
import { SA_CaracteristicaMast } from "./SA_CaracteristicaMast.entity";


@Entity('SA_RelacionCaracteristicaMast')
export class SA_RelacionCaracteristicaMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_relacioncaracteristica: string;


    // Relación con SA_LineaMast
    @ManyToOne(() => SA_LineaMast, (connect) => connect.relacioncaracteristica, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_linea' })
    linea: SA_LineaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_linea: string;

    
    // Relación con SA_CategoriaMast
    @ManyToOne(() => SA_CategoriaMast, (connect) => connect.relacioncaracteristica, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_categoria' })
    categoria: SA_CategoriaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_categoria: string;


    // Relación con SA_SubCategoriaMast
    @ManyToOne(() => SA_SubCategoriaMast, (connect) => connect.relacioncaracteristica, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_subcategoria' })
    subcategoria: SA_SubCategoriaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_subcategoria: string;


    // Relación con SA_ItemMast
    @ManyToOne(() => SA_ItemMast, (connect) => connect.relacioncaracteristica, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_item' })
    item: SA_ItemMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_item: string;


    // Relación con SA_CaracteristicaMast
    @ManyToOne(() => SA_CaracteristicaMast, (connect) => connect.relacioncaracteristica, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_caracteristica' })
    caracteristica: SA_CaracteristicaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_caracteristica: string;


    // Características principales de la tabla
    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    nombre: string;



}
