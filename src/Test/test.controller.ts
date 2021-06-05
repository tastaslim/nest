import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Logger } from 'winston';
import { DataTransformationPipe } from '../pipe/data-transformation.pipe';
import { createTest } from './dto/createTestDTO';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(
    private readonly testService: TestService,
    @Inject('winston') private readonly logger: Logger,
  ) {}
  @Post('/demo')
  //   @UsePipes(new DataTransformationPipe())
  public createData(@Body(DataTransformationPipe) createTest1: createTest) {
    this.logger.info('Winston logger');
    return this.testService.createTest(createTest1);
  }

  @Get('/demo')
  public getData(): string {
    this.logger.info('Winston logger');
    return this.testService.getTest();
  }
}
