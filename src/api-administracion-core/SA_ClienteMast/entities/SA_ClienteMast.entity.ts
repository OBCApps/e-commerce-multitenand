import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

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
    @Column({ type: 'text', nullable: false })
    telefono: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    direccion: string;

    @ApiProperty()
    @Column({ type: 'text', nullable: false })
    fecha_creacion: string;


}
