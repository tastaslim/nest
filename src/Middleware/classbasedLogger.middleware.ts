import { Request, Response } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
@Injectable()
export class LoggerClassMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.url);
    console.log(`Classical logger`);
    next();
  }
}
