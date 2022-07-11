import {createAction, props} from "@ngrx/store";
import {Hero} from "../hero";

export const heroEdit = createAction('Hero Edit', props<Hero>());
export const heroAdd = createAction('Hero Add', props<Hero>())
