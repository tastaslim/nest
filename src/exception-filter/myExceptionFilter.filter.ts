import { Request, Response } from 'express';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
@Catch(HttpException) // if @Catch() is empty, it will look for all exceptions and apply below code for all.
export class MyExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const myHost = host.switchToHttp();
    const response = myHost.getResponse<Response>();
    const request = myHost.getRequest<Request>();
    const status = exception.getStatus();
    response.status(status).json({
      url: request.url,
      statusCode: status,
      timestamp: new Date().toISOString(),
    });
  }
}
