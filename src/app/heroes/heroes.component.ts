import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heros } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes = Heros;
  selectedHero: Hero;


  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
