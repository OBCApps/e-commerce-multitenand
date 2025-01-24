import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SA_LineaMast } from "./SA_LineaMast.entity";
import { SA_CategoriaMast } from "./SA_CategoriaMast.entity";
import { SA_SubCategoriaMast } from "./SA_SubCategoriaMast.entity";


@Entity('SA_ItemMast')
export class SA_ItemMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_item: string;


    // Relación con SA_LineaMast
    @ManyToOne(() => SA_LineaMast, (connect) => connect.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_linea' })
    linea: SA_LineaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_linea: string;

    // Relación con SA_FamiliaMast
    @ManyToOne(() => SA_CategoriaMast, (connect) => connect.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_categoria' })
    categoria: SA_CategoriaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_categoria: string;

    // Relación con SA_SubFamiliaMast
    @ManyToOne(() => SA_SubCategoriaMast, (connect) => connect.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_subcategoria' })
    subcategoria: SA_SubCategoriaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_subcategoria: string;
    
    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    nombre: string;


    // --- ESTABLECER CONEXION CON LAS SUBCATEGORIAS QUE PUEDE TENER CADA CATEGORIA
    @ApiProperty({ type: () => SA_SubCategoriaMast, isArray: true })
    @OneToMany(() => SA_SubCategoriaMast, (connect) => connect.categoria)
    subcategorias: SA_SubCategoriaMast[];

}
