import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCoffeeData } from "../../ngrx/coffee/coffee.action";
import { selectAllCoffeeData, paginateCoffeeData } from "../../ngrx/coffee/coffee.selector";

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

	pageLimit = 10;
	activePage: number = 1;

	public coffeeData$ = this.store.select(selectAllCoffeeData);
	public pageCoffeeData$ = this.store.select(paginateCoffeeData(1, this.pageLimit));

	constructor(private store: Store) { }

	ngOnInit(): void {
			this.store.dispatch(loadCoffeeData());
	}

	counter(i: number) {
		return new Array(i);
	}

	changePagination(pageNumber: number) {
		this.activePage = pageNumber;
		this.pageCoffeeData$ = this.store.select(paginateCoffeeData(pageNumber, this.pageLimit));
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});

	}

}
