import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {singleSelectCoffeeData} from "../../ngrx/coffee/coffee.selector";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number = 0;
  public fetchSingleCoffeeData$:any;

  constructor(private route: ActivatedRoute,private store: Store, private router: Router) { }
  ngOnInit(): void { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });  
    this.fetchSingleCoffeeData$ = this.store.select(singleSelectCoffeeData(this.id)); 
  }

  openPreviousPage(){
    this.router.navigate(['/store']);
  }

}

