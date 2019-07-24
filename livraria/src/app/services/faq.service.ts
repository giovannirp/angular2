import { ErrorHandler } from './../app.error-handler';
import { catchError } from 'rxjs/operators';
import { BOOK_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FaqService {
  constructor(private http: HttpClient) {}
  getFaq(): Observable<any> {
    return this.http.get(BOOK_API + '/faq')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

}
