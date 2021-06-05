import { TestService } from '../Test/test.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class SubTestService {
  constructor(private readonly subTest: TestService) {}
  getToken(): string {
    return this.subTest.getTest();
  }
}
