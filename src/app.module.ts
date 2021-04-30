import { CatsController } from "./Animal/cats/cats.controller";
import { Module } from "@nestjs/common";
import { CatsModule } from "./Animal/cats/cats.module";
import { CatsService } from "./Animal/cats/cats.service";

@Module({
  imports: [CatsModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
