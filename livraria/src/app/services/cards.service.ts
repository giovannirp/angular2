import { BOOK_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCard(): Observable<any> {
    return this.http.get(BOOK_API + '/cards');
  }
}
