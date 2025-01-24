import { Module } from '@nestjs/common';
import { SA_ClienteMastModule } from './SA_ClienteMast/functions/SA_ClienteMast.module';
import { SA_LineaMastModule } from './GE_Inventario/functions/SA_LineaMast/SA_LineaMast.module';
import { SA_CategoriaMastModule } from './GE_Inventario/functions/SA_CategoriaMast/SA_CategoriaMast.module';



@Module({
  imports: [
    SA_ClienteMastModule,
    SA_LineaMastModule,
    SA_CategoriaMastModule
  ]
})
export class ApiAdministracionCoreModule {}
