import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavbarOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  switchMenu(){
    console.log("button clicked");
    this.isNavbarOpen = !this.isNavbarOpen;

  }

}
