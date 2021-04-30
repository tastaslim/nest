import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";
import { Module } from "@nestjs/common";
import * as winston from "winston";
import { WinstonModule } from "nest-winston";

@Module({
  providers: [CatsService],
  controllers: [CatsController],
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `logs/Cat/${new Date()
            .toDateString()
            .split(" ")
            .join("_")}--logs.log`,
          format: winston.format.combine(
            winston.format.timestamp({
              format: new Date().toLocaleString("en-US", {
                timeZone: "UTC",
              }),
            }),
            winston.format.json(),
          ),
        }),
      ],
    }),
  ],
})
export class CatsModule {}
