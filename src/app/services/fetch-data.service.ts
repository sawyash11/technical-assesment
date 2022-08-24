import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'https://random-data-api.com/api/coffee/random_coffee?size=50';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getCoffeeData(): Observable<any> {
    return this.http.get(API_URL);
  }
}
