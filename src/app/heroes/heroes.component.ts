import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {State} from "../reducers/heroes.reducer";
import {heroRemove} from "../actions/heroes.actions";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Observable<Hero[]> = this.store.select((state: any) => state.heroState.heroes);

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = Object.assign({}, hero);
  }

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  del(hero: Hero) {
    this.store.dispatch(heroRemove(hero));
  }

}
