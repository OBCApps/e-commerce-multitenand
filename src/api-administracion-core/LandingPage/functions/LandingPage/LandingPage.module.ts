import { Module } from '@nestjs/common';
import { LandingPageService } from './LandingPage.service';
import { LandingPageController } from './LandingPage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SA_CategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_CategoriaMast.entity';
import { SA_SubCategoriaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_SubCategoriaMast.entity';
import { SA_ItemMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_ItemMast.entity';
import { SA_LineaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_LineaMast.entity';
import { SA_ClienteMast } from 'src/api-administracion-core/SA_ClienteMast/entities/SA_ClienteMast.entity';
import { SA_RelacionCaracteristicaMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_RelacionCaracteristicaMast';
import { SA_RelacionItemMast } from 'src/api-administracion-core/GE_Inventario/entities/SA_RelacionItemMast.entity';



@Module({
    imports: [TypeOrmModule.forFeature([SA_ClienteMast, SA_LineaMast, SA_CategoriaMast, SA_SubCategoriaMast, SA_ItemMast, SA_RelacionCaracteristicaMast,SA_RelacionItemMast])],
    controllers: [LandingPageController],
    providers: [LandingPageService],
    exports: [LandingPageService],
})
export class LandingPageModule { }