import { ApiProperty } from '@nestjs/swagger';
import { SA_LineaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_LineaMast.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SA_ClienteMast')
export class SA_ClienteMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_cliente: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    nombre: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    email: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false, default: '' })
    domain: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    telefono: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    direccion: string;

    @ApiProperty()
    @Column({ type: 'jsonb', nullable: true, default: {} })
    config: any;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    fecha_creacion: string;

    // --- ESTABLECER CONEXION CON LAS LINEAS QUE PUEDE TENER CADA CLIENTE
    @ApiProperty()
    @OneToMany(() => SA_LineaMast, (linea) => linea.cliente)
    lineas: SA_LineaMast[];
}
