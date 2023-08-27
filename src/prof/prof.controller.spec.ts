import { Test, TestingModule } from '@nestjs/testing';
import { ProfController } from './prof.controller';
import { ProfService } from './prof.service';

describe('ProfController', () => {
  let controller: ProfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfController],
      providers: [ProfService],
    }).compile();

    controller = module.get<ProfController>(ProfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
