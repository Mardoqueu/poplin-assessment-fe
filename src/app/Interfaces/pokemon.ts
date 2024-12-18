import { Types } from "./types";

export interface Pokemon {
    id: number;
    type: Types[];
    name: string;
    sprite: string;
    height: number;
    weight: number;
}
