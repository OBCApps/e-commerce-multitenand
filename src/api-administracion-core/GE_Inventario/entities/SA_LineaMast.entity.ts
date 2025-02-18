import { ApiProperty } from '@nestjs/swagger';
import { SA_ClienteMast } from 'src/api-administracion-core/SA_ClienteMast/entities/SA_ClienteMast.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SA_CategoriaMast } from './SA_CategoriaMast.entity';
import { SA_ItemMast } from './SA_ItemMast.entity';
import { SA_RelacionItemMast } from './SA_RelacionItemMast.entity';
import { SA_CaracteristicaMast } from './SA_CaracteristicaMast.entity';
import { SA_RelacionCaracteristicaMast } from './SA_RelacionCaracteristicaMast';

@Entity('SA_LineaMast')
export class SA_LineaMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_linea: string;


    // --- ESTABLECER CONEXION CON EL CLIENTE -> LINEA (UNO A MUCHOS)
    @ApiProperty()
    @ManyToOne(() => SA_ClienteMast, (connect) => connect.lineas, { onDelete: 'CASCADE', onUpdate: 'CASCADE', cascade: true })
    @JoinColumn({ name: 'id_cliente' })
    cliente: SA_ClienteMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_cliente: string;


    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    nombre: string;


    // --- ESTABLECER CONEXION CON LAS CATEGORIAS QUE PUEDE TENER CADA LINEA
    @ApiProperty({ type: () => SA_CategoriaMast, isArray: true })
    @OneToMany(() => SA_CategoriaMast, (connect) => connect.linea)
    categorias: SA_CategoriaMast[];


    // ---- ESTABLECER DIRECTAMENTE CON RELACION-ITEMS
    @ApiProperty({ type: () => SA_RelacionItemMast, isArray: true })
    @OneToMany(() => SA_RelacionItemMast, (connect) => connect.linea)
    relacionitems: SA_RelacionItemMast[];


    // --- ESTABLECER CONEXION CON LAS CARACTERISTICAS QUE PUEDE TENER CADA LINEA
    @ApiProperty({ type: () => SA_RelacionCaracteristicaMast, isArray: true })
    @OneToMany(() => SA_RelacionCaracteristicaMast, (connect) => connect.linea)
    relacioncaracteristica: SA_RelacionCaracteristicaMast[];

}
