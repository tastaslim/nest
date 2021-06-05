import { HttpException, HttpStatus } from '@nestjs/common';
export class CustomException extends HttpException {
  constructor() {
    // super('Forbidden', HttpStatus.FORBIDDEN);
    /*
    or We could do this as well
    */
    super(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Access Denied',
      },
      403,
    );
  }
}
