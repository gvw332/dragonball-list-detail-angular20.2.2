import { DragonballLinks, DragonballMeta } from "./dragonball";

// Liste (résumé pour affichage rapide)
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

export interface DragonballListResponse {
    items: DragonballItems[];
    meta: DragonballMeta;
    links: DragonballLinks;
}

export interface DragonballDetail extends DragonballItems {
    age?: number;
    height?: string;
    weight?: string;

    originPlanet?:OriginePlanette;      // <-- objet
    abilities?: string[];
    aliases?: string[];
    fightingStyles?: string[];
    transformations?: Transformation[]; // <-- tableau d'objets
}
export interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
}

export interface OriginePlanette {
    id: number;
    name: string;
    image: string;
    description: string;
}
