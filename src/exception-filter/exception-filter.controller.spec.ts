import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionFilterController } from './exception-filter.controller';

describe('ExceptionFilterController', () => {
  let controller: ExceptionFilterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExceptionFilterController],
    }).compile();

    controller = module.get<ExceptionFilterController>(ExceptionFilterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
