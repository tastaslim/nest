import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionPracticeController } from './exception-practice.controller';

describe('ExceptionPracticeController', () => {
  let controller: ExceptionPracticeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExceptionPracticeController],
    }).compile();

    controller = module.get<ExceptionPracticeController>(ExceptionPracticeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
