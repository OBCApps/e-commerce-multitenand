import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SA_ItemMast } from '../../entities/SA_ItemMast.entity';
import { SA_ItemMastController } from './SA_ItemMast.controller';
import { SA_ItemMastService } from './SA_ItemMast.service';



@Module({
    imports: [TypeOrmModule.forFeature([SA_ItemMast])],
    controllers: [SA_ItemMastController],
    providers: [SA_ItemMastService],
    exports: [SA_ItemMastService],
})
export class SA_ItemMastModule { }