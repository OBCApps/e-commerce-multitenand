import { Test, TestingModule } from '@nestjs/testing';
import { SaUnidadNegocioMastService } from './sa_unidad-negocio-mast.service';

describe('SaUnidadNegocioMastService', () => {
  let service: SaUnidadNegocioMastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaUnidadNegocioMastService],
    }).compile();

    service = module.get<SaUnidadNegocioMastService>(SaUnidadNegocioMastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
