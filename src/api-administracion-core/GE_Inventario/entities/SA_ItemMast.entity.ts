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

    // Características principales de la tabla
    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    nombre: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '0' })
    precio: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: 'S' })
    disponibilidad: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: 'PEN' })
    tipoMoneda: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    descProductoCorta: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    descProductoLarga: string;


    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: [] })
    fotos: any[];

    // Caracteristicas mescladas - TEC LAPTOP - CELULAR

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    nombre_template: string;

    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: [] })
    especificacionesPrincipales: any[];

    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: [] })
    especificacionesSecundarias: any[];

    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: [] })
    informacionAdicioanl: any[];

    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: [] })
    fichaproducto: any[];

    // Caracteristicas mescladas - HIDRATANTES CERAVE
    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: [] })
    beneficios: any[];

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    ingredientes: string;

    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: [] })
    modoUso: any[];

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    tipoAplicacion: string;



    // --- ESTABLECER CONEXION CON LAS SUBCATEGORIAS QUE PUEDE TENER CADA CATEGORIA
    @ApiProperty({ type: () => SA_SubCategoriaMast, isArray: true })
    @OneToMany(() => SA_SubCategoriaMast, (connect) => connect.categoria)
    subcategorias: SA_SubCategoriaMast[];

}
