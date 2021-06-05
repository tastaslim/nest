import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionFilterService } from './exception-filter.service';

describe('ExceptionFilterService', () => {
  let service: ExceptionFilterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExceptionFilterService],
    }).compile();

    service = module.get<ExceptionFilterService>(ExceptionFilterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
