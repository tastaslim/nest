import { CatController } from './Animal/cat/cat.controller';
import { Module } from '@nestjs/common';
import { CatModule } from './Animal/cat/cat.module';
import { CatService } from './Animal/cat/cat.service';

@Module({
  imports: [CatModule],
  controllers: [CatController],
  providers: [CatService],
})
export class AppModule {}
