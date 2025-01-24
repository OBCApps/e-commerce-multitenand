import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SA_LineaMast } from "./SA_LineaMast.entity";
import { SA_SubCategoriaMast } from "./SA_SubCategoriaMast.entity";
import { SA_ItemMast } from "./SA_ItemMast.entity";

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


    // ---- ESTABLECER DIRECTAMENTE CON ITEMS
    @ApiProperty({ type: () => SA_ItemMast, isArray: true })
    @OneToMany(() => SA_ItemMast, (connect) => connect.linea)
    items: SA_ItemMast[];

}
