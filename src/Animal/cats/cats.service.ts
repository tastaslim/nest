import { ICat } from "./../../Interface/cat.interface";
import { Injectable } from "@nestjs/common";
import axios from "axios";
import animalConfig from "../../../config/credentials.json";
import {
  Cat,
  Categories,
  createVoteParams,
  getBreedByIdParams,
  getSpecificVoteParams,
  searchBreedByNameParams,
  Vote,
} from "types/cat";
@Injectable()
export class CatsService implements ICat {
  async getAllBreeds(): Promise<Array<Cat>> {
    const url = `${animalConfig.host}/breeds`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data["status"] = status;
    return response.data;
  }
  async getBreedById(params: getBreedByIdParams): Promise<Cat> {
    const url = `${animalConfig.host}/breeds/${params.breedId}`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data["status"] = status;
    return response.data;
  }

  async searchBreedByName(
    params: searchBreedByNameParams,
  ): Promise<Array<Cat>> {
    const url = `${animalConfig.host}/breeds/search`;
    const headers = animalConfig.config;
    headers["q"] = `${params.breedName}`;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data["status"] = status;
    return response.data;
  }

  async listCategories(): Promise<Array<Categories>> {
    const url = `${animalConfig.host}/categories`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data["status"] = status;
    return response.data;
  }

  async listVotes(): Promise<Array<Vote>> {
    const url = `${animalConfig.host}/votes`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data["status"] = status;
    return response.data;
  }

  async createVote(params: createVoteParams): Promise<Vote> {
    const url = `${animalConfig.host}/votes`;
    const headers = animalConfig.config;
    const response = await axios.post(url, params.vote, { headers });
    const status = response.status;
    const data = response.data;
    data["status"] = status;
    return response.data;
  }

  async getSpecificVote(params: getSpecificVoteParams): Promise<Vote> {
    const url = `${animalConfig.host}/votes/${params.voteId}`;
    const headers = animalConfig.config;
    const response = await axios.get(url, { headers });
    const status = response.status;
    const data = response.data;
    data["status"] = status;
    return response.data;
  }
}
