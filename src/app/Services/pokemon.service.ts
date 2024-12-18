import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pokemon } from '../Interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'http://localhost:3000/pokemons/'; 

  constructor(private httpClient: HttpClient) { }

  getPokemonByName(name: String): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.url + name);
  }

}
