import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SA_LineaMast } from '../../entities/SA_LineaMast.entity';
import { SA_LineaMastController } from './SA_LineaMast.controller';
import { SA_LineaMastService } from './SA_LineaMast.service';



@Module({
    imports: [TypeOrmModule.forFeature([SA_LineaMast])],
    controllers: [SA_LineaMastController],
    providers: [SA_LineaMastService],
    exports: [SA_LineaMastService],
})
export class SA_LineaMastModule { }