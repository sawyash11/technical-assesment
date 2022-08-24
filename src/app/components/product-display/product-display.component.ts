import { Component, Input, OnInit } from '@angular/core';
import { coffeeDataType } from 'src/app/ngrx/coffee/coffee.selector';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  @Input() name: string = "";
  @Input() origin: string = "";
  @Input() id: any;

  constructor(private router: Router) { }

  openProductPage(id:number){
    console.log("button clicked");
    this.router.navigate(['/store/product'], {queryParams: {id: id}});
  }

  ngOnInit(): void {
  }

}
