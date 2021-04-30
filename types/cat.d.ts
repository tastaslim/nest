export interface getBreedByIdParams {
  breedId: string;
}

export interface searchBreedByNameParams {
  breedName: string;
}

export interface Cat {
  adaptability?: number;
  affection_level?: number;
  alt_names?: string;
  cfa_url?: string;
  child_friendly?: number;
  country_code?: string;
  country_codes?: string;
  description?: string;
  dog_friendly?: number;
  energy_level?: number;
  experimental?: number;
  grooming?: number;
  hairless?: number;
  health_issues?: number;
  hypoallergenic?: number;
  id?: string;
  indoor?: number;
  intelligence?: number;
  lap?: number;
  life_span?: string;
  name?: string;
  natural?: number;
  origin?: string;
  rare?: number;
  reference_image_id?: string;
  rex?: number;
  shedding_level?: 3;
  short_legs?: number;
  social_needs?: number;
  stranger_friendly?: 3;
  suppressed_tail?: number;
  temperament?: string;
  vcahospitals_url?: string;
  vetstreet_url?: string;
  vocalisation?: number;
  weight?: {
    imperial?: string;
    metric?: string;
  };
  wikipedia_url?: string;
}

export interface Categories {
  id?: number;
  name?: string;
}

export interface Vote {
  country_code?: string;
  created_at?: string;
  id?: number;
  image_id?: string;
  sub_id?: string;
  value?: number;
  message?: string;
}

export interface createVoteParams {
  vote: Vote;
}
export interface getSpecificVoteParams {
  voteId: string;
}
