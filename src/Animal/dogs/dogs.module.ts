import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';

@Module({
  providers: [DogsService],
  controllers: [DogsController]
})
export class DogsModule {}
