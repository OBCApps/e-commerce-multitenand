import { Module } from '@nestjs/common';
import { SaUnidadNegocioMastModule } from './sa_unidad-negocio-mast/sa_unidad-negocio-mast.module';

@Module({
  imports: [SaUnidadNegocioMastModule]
})
export class ApiAdministracionCoreModule {}
