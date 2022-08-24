import { createReducer, on } from '@ngrx/store';
import { loadCoffeeData, loadCoffeeDataFailure, loadCoffeeDataSuccess } from './coffee.action';


export interface CoffeeDataState {
  data: any;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CoffeeDataState = {
  data: [],
  error: null,
  status: 'pending',
}

export const CoffeeReducer = createReducer(
  initialState,
  // Handle coffee data loading
  on(loadCoffeeData, (state) => ({ ...state, status: 'loading' })),

  // Handle successfully loaded coffee data
  on(loadCoffeeDataSuccess, (state, { data }) => ({
    ...state,
    data: data,
    error: null,
    status: 'success',
  })),

  // Handle faliure loading coffee data
  on(loadCoffeeDataFailure, (state, { error }) => ({
    ...state,
    data: [],
    error: error,
    status: 'error',
  })),
)