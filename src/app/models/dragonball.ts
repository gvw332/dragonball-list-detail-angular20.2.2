// src/app/models/character.model.ts

export interface DragonballListResponse {
    items: DragonballItems[];
    meta: DragonballMeta;
    links: DragonballLinks;
}

export interface DragonballItems {
  id: number;
  name: string;
  ki: number;
  maxKi: number;
  race: string;
  gender: string;
  affiliation: string;
  description: string;
  image: string;

}
export interface DragonballMeta {

    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
export interface DragonballLinks {
    first: string;
    previous: string;
    next: string;
    last: string;
}
