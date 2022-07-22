import {createAction, props} from "@ngrx/store";
import {Hero} from "../hero";

export const heroEdit = createAction('Hero Edit', props<Hero>());
export const heroAdd = createAction('Hero Add', props<Hero>());
export const heroRemove = createAction('Hero Remove', props<Hero>());
export const heroList = createAction('Hero List');
export const heroListApiSuccess = createAction('Hero List Api Success', props<{heroes: ReadonlyArray<Hero>}>());
