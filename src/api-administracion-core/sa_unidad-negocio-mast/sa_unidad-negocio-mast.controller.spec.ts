import { Test, TestingModule } from '@nestjs/testing';
import { SaUnidadNegocioMastController } from './sa_unidad-negocio-mast.controller';

describe('SaUnidadNegocioMastController', () => {
  let controller: SaUnidadNegocioMastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaUnidadNegocioMastController],
    }).compile();

    controller = module.get<SaUnidadNegocioMastController>(SaUnidadNegocioMastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
