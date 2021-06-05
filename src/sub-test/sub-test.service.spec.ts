import { Test, TestingModule } from '@nestjs/testing';
import { SubTestService } from './sub-test.service';

describe('SubTestService', () => {
  let service: SubTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubTestService],
    }).compile();

    service = module.get<SubTestService>(SubTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
