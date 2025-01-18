import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sa_unidadnegociomast')
export class sa_unidadnegociomast {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id_unidadnegocio: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  nombre: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  email: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  telefono: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  direccion: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true, default: {} })
  fecha_creacion: Date;

 
}
