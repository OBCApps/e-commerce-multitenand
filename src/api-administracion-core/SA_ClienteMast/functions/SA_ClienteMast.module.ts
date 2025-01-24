import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SA_ClienteMastService } from './SA_ClienteMast.service';
import { SA_ClienteMastController } from './SA_ClienteMast.controller';
import { SA_ClienteMast } from '../entities/SA_ClienteMast.entity';


@Module({
    imports: [TypeOrmModule.forFeature([SA_ClienteMast])],
    controllers: [SA_ClienteMastController],
    providers: [SA_ClienteMastService],
    exports: [SA_ClienteMastService],
})
export class SA_ClienteMastModule {}