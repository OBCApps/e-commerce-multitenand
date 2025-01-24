import { Module } from '@nestjs/common';
import { SA_ClienteMastModule } from './SA_ClienteMast/functions/SA_ClienteMast.module';


@Module({
  imports: [SA_ClienteMastModule]
})
export class ApiAdministracionCoreModule {}
