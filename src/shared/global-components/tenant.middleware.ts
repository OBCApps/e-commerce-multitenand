import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SA_ClienteMastService } from 'src/api-administracion-core/SA_ClienteMast/functions/SA_ClienteMast.service';
import { TenantService } from './tenant.service';


@Injectable()
export class TenantMiddleware implements NestMiddleware {
    constructor(private readonly tenantService: TenantService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const tenantDomain = req.headers['x-tenant-id'] as string;

        if (!tenantDomain) {
            throw new UnauthorizedException('X-Tenant-ID header is missing');
        }

        try {
            const tenantId = await this.tenantService.getTenantId(tenantDomain);
            (req as any).tenantId = tenantId; // Guardamos el ID en la request
            next();
        } catch (error) {
            next(error);
        }
    }
}
