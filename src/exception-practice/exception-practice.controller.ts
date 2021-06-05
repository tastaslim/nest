/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, HttpException, Get, HttpStatus } from '@nestjs/common';
import { CustomException } from './customException.exception';

@Controller('exception-practice')
export class ExceptionPracticeController {
  @Get('/exception')
  public getException() {
    // throw new HttpException(
    //   {
    //     status: HttpStatus.NOT_IMPLEMENTED,
    //     error: 'Method not implemented',
    //   },
    //   501,
    // );
    /*
      custom exception using exception class.
     */
    throw new CustomException();
  }
}
