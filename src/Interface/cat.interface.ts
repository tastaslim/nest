import {
  Cat,
  Categories,
  createVoteParams,
  getBreedByIdParams,
  searchBreedByNameParams,
  Vote,
} from "types/cat";
export interface ICat {
  getAllBreeds(): Promise<Array<Cat>>;
  getBreedById(params: getBreedByIdParams): Promise<Cat>;
  searchBreedByName(params: searchBreedByNameParams): Promise<Array<Cat>>;
  listCategories(): Promise<Array<Categories>>;
  listVotes(): Promise<Array<Vote>>;
  createVote(params: createVoteParams): Promise<Vote>;
}
