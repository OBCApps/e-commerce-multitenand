import { Module } from '@nestjs/common';
import { SaUnidadNegocioMastService } from './sa_unidad-negocio-mast.service';
import { SaUnidadNegocioMastController } from './sa_unidad-negocio-mast.controller';

@Module({
  providers: [SaUnidadNegocioMastService],
  controllers: [SaUnidadNegocioMastController]
})
export class SaUnidadNegocioMastModule {}
