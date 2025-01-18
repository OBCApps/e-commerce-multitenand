import { Module } from '@nestjs/common';
import { SaUnidadNegocioMastService } from './sa_unidad-negocio-mast.service';
import { SaUnidadNegocioMastController } from './sa_unidad-negocio-mast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sa_unidadnegociomast } from './entities/SA_UnidadNegocioMast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([sa_unidadnegociomast])],
  providers: [SaUnidadNegocioMastService],
  controllers: [SaUnidadNegocioMastController]
})
export class SaUnidadNegocioMastModule {}
