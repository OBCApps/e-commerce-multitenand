import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { sa_unidadnegociomast } from './entities/SA_UnidadNegocioMast.entity';
import { CreateSA_UnidadNegocioMast } from './dto/create-sa_unidad-negocio-mast';

@Injectable()
export class SaUnidadNegocioMastService {
    constructor(
        @InjectRepository(sa_unidadnegociomast)
        private sa_unidadnegocioRepository: Repository<sa_unidadnegociomast>,
    ) { }

    findAll(): Promise<sa_unidadnegociomast[]> {
        return this.sa_unidadnegocioRepository.find();
    }

    findOne(id: string): Promise<sa_unidadnegociomast | null> {
        return this.sa_unidadnegocioRepository.findOneBy({ id_unidadnegocio: id });
    }

    async remove(id: number): Promise<void> {
        await this.sa_unidadnegocioRepository.delete(id);
    }

    async create(createEventoDto: CreateSA_UnidadNegocioMast): Promise<sa_unidadnegociomast> {
        const nuevoEvento = this.sa_unidadnegocioRepository.create(createEventoDto);
        return await this.sa_unidadnegocioRepository.save(nuevoEvento);
    }

    async update(id: string, updateEventoDto: CreateSA_UnidadNegocioMast): Promise<sa_unidadnegociomast> {
        const eventoToUpdate = await this.findOne(id);

        this.sa_unidadnegocioRepository.merge(eventoToUpdate, updateEventoDto);
        return await this.sa_unidadnegocioRepository.save(eventoToUpdate);
    }
}
