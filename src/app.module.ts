import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiComunCoreModule } from './api-comun-core/api-comun-core.module';
import { ApiAdministracionCoreModule } from './api-administracion-core/api-administracion-core.module';
import { ApiSeguridadCoreModule } from './api-seguridad-core/api-seguridad-core.module';

@Module({
  imports: [ApiComunCoreModule, ApiAdministracionCoreModule, ApiSeguridadCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
