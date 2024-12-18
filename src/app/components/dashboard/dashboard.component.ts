import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';
import { PokemonService } from '../../Services/pokemon.service';
import { HttpClient, HttpHandler, HttpStatusCode, provideHttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { PokeviewComponent } from '../pokeview/pokeview.component';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PokeviewComponent, NgForOf, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [PokemonService]
})
export class DashboardComponent implements OnInit {
    pokeName: string = '';
    displayedPokemons: Pokemon[] = [];

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void{

      this.displayedPokemons = this.getStartingPokemons();

      console.log('StartingPokemons: ',this.displayedPokemons);

    }

    getStartingPokemons(): Pokemon[]{
      var pokemons: Pokemon[] = []

        this.getPokemonByName('charmander').then(resp => {
          pokemons.push(resp);
        });

        this.getPokemonByName('bulbasaur').then(resp => {
          pokemons.push(resp);
        });

        this.getPokemonByName('squirtle').then(resp => {
          pokemons.push(resp);
        });

      return pokemons;
    }

    async getPokemonByName(name: string): Promise<Pokemon>{      
      return await lastValueFrom(this.pokemonService.getPokemonByName(name))
    }

    searchPokemon(name: string): void{
      if(name !== "" && name !== undefined){  
        this.displayedPokemons = [];

        this.getPokemonByName(name).then(response =>{
          this.displayedPokemons.push(response);
        }).catch(error => {
          if(error.status == 500){
            alert('Pokemon not found... Try again!');
          }
        });
      } else {
        alert('Type a name in the search bar!');
      }
    }
}
