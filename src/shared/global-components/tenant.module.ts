import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantMiddleware } from './tenant.middleware';
import { TenantService } from './tenant.service';
import { SA_ClienteMast } from 'src/api-administracion-core/SA_ClienteMast/entities/SA_ClienteMast.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SA_ClienteMast])],
    providers: [TenantService],
    exports: [TenantService],
})
export class TenantModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(TenantMiddleware).forRoutes('*'); // Aplica globalmente
    }
}
