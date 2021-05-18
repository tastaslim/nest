import { Injectable } from '@nestjs/common';
import {
  Animal,
  getBreedByIdParams,
  searchBreedByNameParams,
  Categories,
  Vote,
  createVoteParams,
  getSpecificVoteParams,
  deleteVoteParams,
  Favourite,
} from 'types/animal';

@Injectable()
export abstract class AnimalService {
  abstract getAllBreeds(): Promise<Array<Animal>>;
  abstract getBreedById(params: getBreedByIdParams): Promise<Animal>;
  abstract searchBreedByName(
    params: searchBreedByNameParams,
  ): Promise<Array<Animal>>;
  abstract listCategories(): Promise<Array<Categories>>;
  abstract listVotes(): Promise<Array<Vote>>;
  abstract createVote(params: createVoteParams): Promise<Vote>;
  abstract getSpecificVote(params: getSpecificVoteParams): Promise<Vote>;
  abstract deleteVote(params: deleteVoteParams): Promise<void>;
  abstract listFavourites(): Promise<Array<Favourite>>;
  public static commonProperties() {
    return { eye: 2, leg: 4, nature: 'Pet and Wild' };
  }
}
