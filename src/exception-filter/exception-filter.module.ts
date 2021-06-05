import { Module } from '@nestjs/common';
import { ExceptionFilterService } from './exception-filter.service';
import { ExceptionFilterController } from './exception-filter.controller';

@Module({
  providers: [ExceptionFilterService],
  controllers: [ExceptionFilterController]
})
export class ExceptionFilterModule {}
