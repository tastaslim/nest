import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { Cat, Categories, Vote } from "types/cat";
import { CatsService } from "./cats.service";
import { createVoteDto } from "./dto/cat.dto";
import { Logger } from "winston";
@Controller("cats")
export class CatsController {
  constructor(@Inject("winston") private readonly logger: Logger) {}
  @Get("/breeds")
  lisBreeds(): Promise<Array<Cat>> {
    this.logger.info("listBreed() function is executing");
    return new CatsService().getAllBreeds();
  }

  @Get("/breeds/:breedId")
  getBreed(@Param("breedId") breedId: string): Promise<Cat> {
    return new CatsService().getBreedById({ breedId });
  }

  @Get("/breeds/search")
  serachBreedByName(
    @Query("breedName") breedName: string,
  ): Promise<Array<Cat>> {
    return new CatsService().searchBreedByName({ breedName });
  }

  @Get("/categories")
  listCategories(): Promise<Array<Categories>> {
    return new CatsService().listCategories();
  }

  @Get("/votes")
  listVotes(): Promise<Array<Vote>> {
    return new CatsService().listVotes();
  }

  @Post("/votes")
  @HttpCode(201)
  createVote(@Body() vote: createVoteDto): Promise<Vote> {
    return new CatsService().createVote({ vote });
  }
  @Get("/votes/:voteId")
  getSpecificVote(@Param("voteId") voteId: string): Promise<Vote> {
    return new CatsService().getSpecificVote({ voteId });
  }
}
