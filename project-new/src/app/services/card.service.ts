import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from '../app.api';
import { Card } from '../models/card.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  /*
    private extractData(res: Response) {
      const body  = res;
      return body || { };
    }
    */

  constructor(private http: HttpClient) { }

  /*
  getCards(): Observable<any> {
    return this.http.get(MEAT_API + '/cards').pipe(
      map(this.extractData));
  }
 */
  getCards(): Observable<any> {
    return this.http.get(MEAT_API + '/cards')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

  getCardId(id: string): Observable<any> {
    return this.http.get(MEAT_API + `/cards/${id}`)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }




}
