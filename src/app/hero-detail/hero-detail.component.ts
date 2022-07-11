import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {Store} from "@ngrx/store";
import {heroAdd, heroEdit} from "../actions/heroes.actions";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setHero(hero: Hero) {
    this.store.dispatch(heroEdit(hero));
  }

  addHero(hero: Hero) {
    this.store.dispatch(heroAdd(hero));
  }

}
