import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SA_SubCategoriaMastController } from './SA_SubCategoriaMast.controller';
import { SA_SubCategoriaMastService } from './SA_SubCategoriaMast.service';
import { SA_SubCategoriaMast } from '../../entities/SA_SubCategoriaMast.entity';



@Module({
    imports: [TypeOrmModule.forFeature([SA_SubCategoriaMast])],
    controllers: [SA_SubCategoriaMastController],
    providers: [SA_SubCategoriaMastService],
    exports: [SA_SubCategoriaMastService],
})
export class SA_SubCategoriaMastModule { }