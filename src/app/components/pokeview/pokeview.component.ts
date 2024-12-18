import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';
import { Types } from '../../Interfaces/types';

@Component({
  selector: 'app-pokeview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokeview.component.html',
  styleUrl: './pokeview.component.css'
})
export class PokeviewComponent implements OnInit{
  @Input() pokemon!: Pokemon;

  id: number = 0;
  weight: number = 0;
  height: number = 0;
  name: string = '';
  sprite: string = '';
  types: Types[] = [];


  ngOnInit(): void {
    if(this.pokemon !== undefined){
      this.id = this.pokemon.id;
      this.weight = this.pokemon.weight;
      this.height = this.pokemon.height;
      this.name = this.pokemon.name;
      this.sprite = this.pokemon.sprite;
      this.types = this.pokemon.type;
    }
  }

}
