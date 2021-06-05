import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { LoggerClassMiddleware } from '../Middleware/classbasedLogger.middleware';

@Module({
  providers: [DemoService],
  controllers: [DemoController],
})
// export class DemoModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(loggerMiddleware)
//       .exclude({ path: 'demo/cats', method: RequestMethod.GET })
//       .forRoutes(DemoController);
//   }
// }
export class DemoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerClassMiddleware)
      .exclude({ path: 'demo/cats', method: RequestMethod.GET })
      .forRoutes(DemoController);
  }
}
