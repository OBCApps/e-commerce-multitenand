import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SA_LineaMast } from "./SA_LineaMast.entity";
import { SA_CategoriaMast } from "./SA_CategoriaMast.entity";
import { SA_SubCategoriaMast } from "./SA_SubCategoriaMast.entity";
import { SA_RelacionItemMast } from "./SA_RelacionItemMast.entity";
import { SA_RelacionCaracteristicaMast } from "./SA_RelacionCaracteristicaMast";


@Entity('SA_ItemMast')
export class SA_ItemMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_item: string;

    // Características principales de la tabla
    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    nombre: string;

    @ApiProperty()
    @Column({ type: 'text', default: '' })
    name_route: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '0' })
    precio: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '0' })
    cantidadDisponible: string;

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
    /* @ApiProperty({ type: () => SA_SubCategoriaMast, isArray: true })
    @OneToMany(() => SA_SubCategoriaMast, (connect) => connect.categoria)
    subcategorias: SA_SubCategoriaMast[];
 */

    // ---- ESTABLECER DIRECTAMENTE CON RELACION - ITEMS
    @ApiProperty({ type: () => SA_RelacionItemMast, isArray: true })
    @OneToMany(() => SA_RelacionItemMast, (connect) => connect.item)
    relacionitems: SA_RelacionItemMast[];


    // --- ESTABLECER CONEXION CON LAS CARACTERISTICAS QUE PUEDE TENER CADA LINEA
    @ApiProperty({ type: () => SA_RelacionCaracteristicaMast, isArray: true })
    @OneToMany(() => SA_RelacionCaracteristicaMast, (connect) => connect.item)
    relacioncaracteristica: SA_RelacionCaracteristicaMast[];
}
