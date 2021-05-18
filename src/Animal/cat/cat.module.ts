import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Module } from '@nestjs/common';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';

@Module({
  providers: [CatService],
  controllers: [CatController],
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `logs/Cat/${new Date()
            .toDateString()
            .split(' ')
            .join('_')}--logs.log`,
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
})
export class CatModule {}
