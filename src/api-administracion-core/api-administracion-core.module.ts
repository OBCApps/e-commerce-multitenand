import { Module } from '@nestjs/common';
import { SA_ClienteMastModule } from './SA_ClienteMast/functions/SA_ClienteMast.module';
import { SA_LineaMastModule } from './GE_Inventario/functions/SA_LineaMast/SA_LineaMast.module';
import { SA_CategoriaMastModule } from './GE_Inventario/functions/SA_CategoriaMast/SA_CategoriaMast.module';
import { SA_ItemMastModule } from './GE_Inventario/functions/SA_ItemMast/SA_ItemMast.module';
import { SA_SubCategoriaMastModule } from './GE_Inventario/functions/SA_SubCategoriaMast/SA_SubCategoriaMast.module';



@Module({
  imports: [
    SA_ClienteMastModule,
    SA_LineaMastModule,
    SA_CategoriaMastModule,
    SA_SubCategoriaMastModule,
    SA_ItemMastModule
  ]
})
export class ApiAdministracionCoreModule {}
