import { TestModule } from '../Test/test.module';
import { Module } from '@nestjs/common';
import { SubTestService } from './sub-test.service';

@Module({
  providers: [SubTestService],
  imports: [TestModule], // Gives us Access to use TestService, Since TestService is already exported in
  //TestModule
})
export class SubTestModule {}
