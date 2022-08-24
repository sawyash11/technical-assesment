import { createSelector } from '@ngrx/store';
import { CoffeeDataState } from './coffee.reducer';


export interface coffeeDataType {
    id: number,
    uid: string,
    blend_name: string,
    origin: string,
    variety: string,
    notes: string,
    intensifier: string
}


export const selectCoffeeData = (state: any) => state.coffeeData;
// Initial coffee data load
export const selectAllCoffeeData = createSelector(
    selectCoffeeData,
    (state: CoffeeDataState) => state.data
);

// single coffee data for product details page
export const singleSelectCoffeeData = (id: number) => createSelector(
    selectCoffeeData,
    (state: CoffeeDataState) => [state.data.find((data: coffeeDataType) => data.id == id)],
)

// coffee data as per page number 
export const paginateCoffeeData = (pageNumber: number, limit: number) => createSelector(
    selectCoffeeData,
    (state: CoffeeDataState) => state.data.slice(pageNumber*limit - limit, pageNumber*limit),
)

