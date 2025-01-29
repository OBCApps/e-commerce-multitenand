import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SA_ClienteMast } from 'src/api-administracion-core/SA_ClienteMast/entities/SA_ClienteMast.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantService {
    constructor(
        @InjectRepository(SA_ClienteMast)
        private readonly repository: Repository<SA_ClienteMast>,
    ) { }

    async getTenantId(domain: string): Promise<string> {
        const client = await this.repository.findOne({ where: { domain } });
        console.log("si entra aqui");
        
        if (!client) {
            throw new NotFoundException(`No se encontró un cliente con dominio ${domain}`);
        }

        return client.id_cliente;
    }
}
