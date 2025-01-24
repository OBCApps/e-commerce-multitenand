import { ApiProperty } from '@nestjs/swagger';
import { SA_ClienteMast } from 'src/api-administracion-core/SA_ClienteMast/entities/SA_ClienteMast.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SA_CategoriaMast } from './SA_CategoriaMast.entity';
import { SA_ItemMast } from './SA_ItemMast.entity';

@Entity('SA_LineaMast')
export class SA_LineaMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_linea: string;

    // --- ESTABLECER CONEXION CON EL CLIENTE -> LINEA (UNO A MUCHOS)
    @ApiProperty()
    @ManyToOne(() => SA_ClienteMast, (connect) => connect.lineas, { onDelete: 'CASCADE', cascade: true })
    @JoinColumn({ name: 'id_cliente' })
    cliente: SA_ClienteMast;


    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    nombre: string;

    // --- ESTABLECER CONEXION CON LAS CATEGORIAS QUE PUEDE TENER CADA LINEA
    @ApiProperty({ type: () => SA_CategoriaMast, isArray: true })
    @OneToMany(() => SA_CategoriaMast, (connect) => connect.linea)
    categorias: SA_CategoriaMast[];



    // ---- ESTABLECER DIRECTAMENTE CON ITEMS
    @ApiProperty({ type: () => SA_ItemMast, isArray: true })
    @OneToMany(() => SA_ItemMast, (connect) => connect.linea)
    items: SA_ItemMast[];


}
