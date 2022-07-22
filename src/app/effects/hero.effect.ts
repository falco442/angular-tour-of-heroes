import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {HeroService} from "../services/hero.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Hero} from "../hero";
import {of} from "rxjs";
import {heroListApiSuccess} from "../actions/heroes.actions";

@Injectable()
export class HeroEffect {

  constructor(private heroService: HeroService, private actions: Actions) {
  }

  @Effect()
  loadHeroes = this.actions.pipe(
    ofType('Hero List'),
    mergeMap(
      () => this.heroService.getAll()
        .pipe(
          map((heroes: Hero[]) => heroListApiSuccess({heroes: [...heroes]})),
          catchError(() => of({type: '[Heroes API] Heroes Loaded Success'}))
        )
    )
  )
}
