import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestService],
    }).compile();

    service = module.get<TestService>(TestService);
  });

  it('should be defined', () => {
    const data = 'Dummy YES';
    jest.spyOn(service, 'getTest').mockImplementation(() => data);
    expect(service.getTest()).toBe(data);
  });
});
