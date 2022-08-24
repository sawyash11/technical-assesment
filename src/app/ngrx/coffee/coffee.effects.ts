import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCoffeeData, loadCoffeeDataFailure, loadCoffeeDataSuccess } from './coffee.action';
import { FetchDataService } from "../../services/fetch-data.service";
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class CoffeeEffects {

    constructor(
        private actions$: Actions,
        private fetchDataService: FetchDataService
    ) { }

    // load coffee data from API
    loadCoffeeData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCoffeeData),
            switchMap(() =>
                from(this.fetchDataService.getCoffeeData()).pipe(
                    map((res) => loadCoffeeDataSuccess({ data: res })),
                    catchError((error) => of(loadCoffeeDataFailure({ error })))
                )
            )
        )
    );

}