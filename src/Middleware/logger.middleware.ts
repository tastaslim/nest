import { Request, Response } from 'express';
export function loggerMiddleware(req: Request, res: Response, next) {
  //   console.log(req, res);
  console.log('Logger Middleware');
  next();
}
