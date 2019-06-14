import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';


@Injectable({
  providedIn: 'root',
})
export class FaqService {
  constructor(private http: HttpClient) {}

  getFaq(): Observable<any> {
    return this.http.get(MEAT_API + '/faq')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

}
