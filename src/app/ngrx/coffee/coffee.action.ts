import { createAction, props } from '@ngrx/store';

// load coffee data action
export const loadCoffeeData = createAction('[Coffee List page] Load Coffee');

// coffee data load success action
export const loadCoffeeDataSuccess = createAction(
  '[Coffee List API] Data Load Success',
  props<{ data: any }>()
);

// coffee data load faliure action
export const loadCoffeeDataFailure = createAction(
  '[Coffee List API] Data Load Failure',
  props<{ error: string }>()
);

