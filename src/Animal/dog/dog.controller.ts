import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Animal, Categories, Vote, Favourite } from 'types/animal';
import { DogService } from './dog.service';
import { createVoteDto } from '../base/dto/animal.dto';
import { Logger } from 'winston';
@Controller('dogs')
export class DogController {
  constructor(@Inject('winston') private readonly logger: Logger) {}
  @Get('/breeds')
  lisBreeds(): Promise<Array<Animal>> {
    this.logger.info('listBreed() function is executing');
    return new DogService().getAllBreeds();
  }

  @Get('/breeds/:breedId')
  getBreed(@Param('breedId') breedId: string): Promise<Animal> {
    return new DogService().getBreedById({ breedId });
  }

  @Get('/breeds/search')
  serachBreedByName(
    @Query('breedName') breedName: string,
  ): Promise<Array<Animal>> {
    return new DogService().searchBreedByName({ breedName });
  }

  @Get('/categories')
  listCategories(): Promise<Array<Categories>> {
    return new DogService().listCategories();
  }

  @Get('/votes')
  listVotes(): Promise<Array<Vote>> {
    return new DogService().listVotes();
  }

  @Post('/votes')
  @HttpCode(201)
  createVote(@Body() vote: createVoteDto): Promise<Vote> {
    return new DogService().createVote({ vote });
  }
  @Get('/votes/:voteId')
  getSpecificVote(@Param('voteId') voteId: string): Promise<Vote> {
    return new DogService().getSpecificVote({ voteId });
  }

  @Delete('/votes/:voteId')
  @HttpCode(200)
  deleteVote(@Param('voteId') voteId: string): Promise<void> {
    return new DogService().deleteVote({ voteId });
  }

  @Get('/favourites')
  listFavourites(): Promise<Array<Favourite>> {
    return new DogService().listFavourites();
  }
}
