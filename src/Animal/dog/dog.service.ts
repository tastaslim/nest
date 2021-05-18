import { Injectable } from '@nestjs/common';
import axios from 'axios';
import animalConfig from '../../../config/credentials.json';
import {
  Animal,
  Categories,
  createVoteParams,
  deleteVoteParams,
  Favourite,
  getBreedByIdParams,
  getFavouriteParams,
  getSpecificVoteParams,
  searchBreedByNameParams,
  Vote,
} from 'types/animal';
import { AnimalService } from '../base/Animal';
import { IAnimal } from 'src/Interface/animal.interface';

@Injectable()
export class DogService extends AnimalService implements IAnimal {
  constructor() {
    super();
  }
  async getAllBreeds(): Promise<Array<Animal>> {
    const url = `${animalConfig.host2}/breeds`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }
  async getBreedById(params: getBreedByIdParams): Promise<Animal> {
    const url = `${animalConfig.host2}/breeds/${params.breedId}`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async searchBreedByName(
    params: searchBreedByNameParams,
  ): Promise<Array<Animal>> {
    const url = `${animalConfig.host2}/breeds/search`;
    const headers = animalConfig.config;
    headers['q'] = `${params.breedName}`;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async listCategories(): Promise<Array<Categories>> {
    const url = `${animalConfig.host2}/categories`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async listVotes(): Promise<Array<Vote>> {
    const url = `${animalConfig.host2}/votes`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async createVote(params: createVoteParams): Promise<Vote> {
    const url = `${animalConfig.host2}/votes`;
    const headers = animalConfig.config;
    const response = await axios.post(url, params.vote, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async getSpecificVote(params: getSpecificVoteParams): Promise<Vote> {
    const url = `${animalConfig.host2}/votes/${params.voteId}`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async deleteVote(params: deleteVoteParams): Promise<void> {
    const url = `${animalConfig.host2}/votes/${params.voteId}`;
    const headers = animalConfig.config;
    const response = await axios.delete(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async listFavourites(): Promise<Array<Favourite>> {
    const url = `${animalConfig.host2}/favourites`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }

  async getFavourite(params: getFavouriteParams): Promise<Favourite> {
    const url = `${animalConfig.host2}/favourites/${params.favouriteId}`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data['status'] = status;
    return response.data;
  }
}
