import {createReducer, on} from "@ngrx/store";
import {heroAdd, heroEdit, heroRemove} from "../actions/heroes.actions";
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";

export interface State {
  heroes: Hero[];
}

export const initialState: State = {
  heroes: HEROES
};

export const heroesReducer = createReducer(
  initialState,
  on(heroEdit, (state: State, hero: Hero) => {
    const clonedState: State = JSON.parse(JSON.stringify(state));
    const oldHeroIndex: number = clonedState.heroes.findIndex((h: Hero) => h.id === hero.id);
    if (oldHeroIndex !== -1) {
      clonedState.heroes[oldHeroIndex] = hero;
    }
    console.log('Modificato eroe con indice ' + oldHeroIndex);
    return clonedState;
  }),
  on(heroAdd, (state: State, hero: Hero) => {
    const clonedState = JSON.parse(JSON.stringify(state));
    const clonedHero = JSON.parse(JSON.stringify(hero));
    clonedHero.id = state.heroes.length;
    clonedState.heroes.push(clonedHero);
    console.log('Aggiunto eroe');
    return clonedState;
  }),
  on(heroRemove, (state: State, hero: Hero) => {
    const clonedState: State = JSON.parse(JSON.stringify(state));
    clonedState.heroes.splice(clonedState.heroes.findIndex((h: Hero) => h.id === hero.id), 1);
    return clonedState;
  })
);
