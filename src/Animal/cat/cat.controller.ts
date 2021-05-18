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
import { CatService } from './cat.service';
import { createVoteDto } from '../base/dto/animal.dto';
import { Logger } from 'winston';
@Controller('cats')
export class CatController {
  constructor(@Inject('winston') private readonly logger: Logger) {}
  @Get('/breeds')
  lisBreeds(): Promise<Array<Animal>> {
    this.logger.info('listBreed() function is executing');
    return new CatService().getAllBreeds();
  }

  @Get('/breeds/:breedId')
  getBreed(@Param('breedId') breedId: string): Promise<Animal> {
    return new CatService().getBreedById({ breedId });
  }

  @Get('/breeds/search')
  serachBreedByName(
    @Query('breedName') breedName: string,
  ): Promise<Array<Animal>> {
    return new CatService().searchBreedByName({ breedName });
  }

  @Get('/categories')
  listCategories(): Promise<Array<Categories>> {
    return new CatService().listCategories();
  }

  @Get('/votes')
  listVotes(): Promise<Array<Vote>> {
    return new CatService().listVotes();
  }

  @Post('/votes')
  @HttpCode(201)
  createVote(@Body() vote: createVoteDto): Promise<Vote> {
    return new CatService().createVote({ vote });
  }
  @Get('/votes/:voteId')
  getSpecificVote(@Param('voteId') voteId: string): Promise<Vote> {
    return new CatService().getSpecificVote({ voteId });
  }

  @Delete('/votes/:voteId')
  @HttpCode(200)
  deleteVote(@Param('voteId') voteId: string): Promise<void> {
    return new CatService().deleteVote({ voteId });
  }

  @Get('/favourites')
  listFavourites(): Promise<Array<Favourite>> {
    return new CatService().listFavourites();
  }
  @Get('/commonproperties')
  commonProperties() {
    return CatService.commonProperties(); // It is a static and non overriding function of base class
  }
}
