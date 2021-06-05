import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';
import { TestModule } from './Test/test.module';
import { SubTestModule } from './sub-test/sub-test.module';
import { ExceptionPracticeModule } from './exception-practice/exception-practice.module';
import { ExceptionFilterModule } from './exception-filter/exception-filter.module';

@Module({
  imports: [
    TestModule,
    SubTestModule,
    DemoModule,
    ExceptionPracticeModule,
    ExceptionFilterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
