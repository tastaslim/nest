import { Module } from '@nestjs/common';
import { ExceptionPracticeService } from './exception-practice.service';
import { ExceptionPracticeController } from './exception-practice.controller';

@Module({
  providers: [ExceptionPracticeService],
  controllers: [ExceptionPracticeController],
})
export class ExceptionPracticeModule {}
