import { TestService } from './test.service';
import { TestController } from './test.controller';
import { Module } from '@nestjs/common';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';

@Module({
  providers: [TestService],
  exports: [TestService],
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `logs/outlook/Mail/${new Date()
            .toDateString()
            .split(' ')
            .join('-')}_logs.log`,
          format: winston.format.combine(
            winston.format.timestamp({
              format: new Date().toLocaleString('en-US', {
                timeZone: 'UTC',
              }),
            }),
            winston.format.json(),
          ),
        }),
      ],
    }),
  ],
  controllers: [TestController], // Export TestService here so that other modules can use it by importing module
  // of test==> TstModule
})
export class TestModule {}
