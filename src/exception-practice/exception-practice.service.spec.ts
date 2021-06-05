import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionPracticeService } from './exception-practice.service';

describe('ExceptionPracticeService', () => {
  let service: ExceptionPracticeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExceptionPracticeService],
    }).compile();

    service = module.get<ExceptionPracticeService>(ExceptionPracticeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
