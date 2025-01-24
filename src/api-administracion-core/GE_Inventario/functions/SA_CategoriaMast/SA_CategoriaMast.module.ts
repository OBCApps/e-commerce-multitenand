import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SA_CategoriaMast } from '../../entities/SA_CategoriaMast.entity';
import { SA_CategoriaMastController } from './SA_CategoriaMast.controller';
import { SA_CategoriaMastService } from './SA_CategoriaMast.service';



@Module({
    imports: [TypeOrmModule.forFeature([SA_CategoriaMast])],
    controllers: [SA_CategoriaMastController],
    providers: [SA_CategoriaMastService],
    exports: [SA_CategoriaMastService],
})
export class SA_CategoriaMastModule { }