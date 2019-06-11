import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';

@Injectable({
  providedIn: 'root',
})
export class DepositionsService {

  constructor(private http: HttpClient) {}

  getDepositions(): Observable<any> {
    return this.http.get(MEAT_API + '/depositions')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }
}
