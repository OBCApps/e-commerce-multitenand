import { Module } from '@nestjs/common';
import { SA_ClienteMastModule } from './SA_ClienteMast/functions/SA_ClienteMast.module';
import { SA_LineaMastModule } from './GE_Inventario/functions/SA_LineaMast/SA_LineaMast.module';



@Module({
  imports: [
    SA_ClienteMastModule,
    SA_LineaMastModule
  ]
})
export class ApiAdministracionCoreModule {}
