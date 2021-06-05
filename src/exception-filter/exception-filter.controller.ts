import { Controller, Get, UseFilters } from '@nestjs/common';
import { CustomException } from 'src/exception-practice/customException.exception';
import { MyExceptionFilter } from './myExceptionFilter.filter';

@Controller('exception-filter')
export class ExceptionFilterController {
  @Get('/cats')
  @UseFilters(MyExceptionFilter)
  async getData() {
    throw new CustomException();
  }
}
