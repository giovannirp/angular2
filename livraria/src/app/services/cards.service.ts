import { BOOK_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from '../app.error-handler';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCard(): Observable<any> {
    return this.http.get(BOOK_API + '/cards')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

  getCardId(id: string): Observable<any> {
    return this.http.get(BOOK_API +  `/cards/${id}`)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }
}
