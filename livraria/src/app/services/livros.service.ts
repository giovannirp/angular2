import { BOOK_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHandler } from '../app.error-handler';
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient) { }

  getLivros(): Observable<any> {
    return this.http.get(BOOK_API + '/livros')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

  getLivrosDetails(id: string): Observable<any> {
    return this.http.get(BOOK_API + `/livros/${id}`)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }
}
