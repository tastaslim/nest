import { createTest } from './dto/createTestDTO';
import { Injectable } from '@nestjs/common';
@Injectable()
export class TestService {
  public getTest(): string {
    return 'YES';
  }
  public createTest(params: createTest): createTest {
    return params;
  }
}
