import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SA_CategoriaMast } from './SA_CategoriaMast.entity';
import { SA_ItemMast } from './SA_ItemMast.entity';
import { SA_LineaMast } from './SA_LineaMast.entity';
import { SA_SubCategoriaMast } from './SA_SubCategoriaMast.entity';

@Entity('SA_RelacionItemMast')
export class SA_RelacionItemMast {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id_relacionitem: string;

    // Relación con SA_LineaMast
    @ManyToOne(() => SA_LineaMast, (connect) => connect.relacionitems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_linea' })
    linea: SA_LineaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_linea: string;

    // Relación con SA_FamiliaMast
    @ManyToOne(() => SA_CategoriaMast, (connect) => connect.relacionitems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_categoria' })
    categoria: SA_CategoriaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_categoria: string;

    // Relación con SA_SubFamiliaMast
    @ManyToOne(() => SA_SubCategoriaMast, (connect) => connect.relacionitems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_subcategoria' })
    subcategoria: SA_SubCategoriaMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_subcategoria: string;

    // Relación con SA_SubFamiliaMast
    @ManyToOne(() => SA_ItemMast, (connect) => connect.relacionitems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_item' })
    item: SA_ItemMast;
    @ApiProperty()
    @Column({ type: 'uuid', nullable: false })
    id_item: string;
}
