import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiComunCoreModule } from './api-comun-core/api-comun-core.module';
import { ApiAdministracionCoreModule } from './api-administracion-core/api-administracion-core.module';
import { ApiSeguridadCoreModule } from './api-seguridad-core/api-seguridad-core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      //url : process.env.DATABASE_URL,
      host:  process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASWOORD, 
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logger: 'advanced-console',
      logging: true,
    }),
    ApiComunCoreModule,
    ApiAdministracionCoreModule,
    ApiSeguridadCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
