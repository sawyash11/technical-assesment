import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { StoreComponent } from './screens/store/store.component';
import { ProductComponent } from './screens/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FetchDataService } from "./services/fetch-data.service";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeReducer } from './ngrx/coffee/coffee.reducer';
import { CoffeeEffects } from './ngrx/coffee/coffee.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDisplayComponent,
    HomeComponent,
    AboutComponent,
    StoreComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ coffeeData: CoffeeReducer }),
    EffectsModule.forRoot([CoffeeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [HttpClient, FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
