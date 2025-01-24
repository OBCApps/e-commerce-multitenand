import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SA_CategoriaMast } from "./SA_CategoriaMast.entity";
import { SA_ItemMast } from "./SA_ItemMast.entity";

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


    // ---- ESTABLECER DIRECTAMENTE CON ITEMS
    @ApiProperty({ type: () => SA_ItemMast, isArray: true })
    @OneToMany(() => SA_ItemMast, (connect) => connect.linea)
    items: SA_ItemMast[];

}
