import { BOOK_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient) { }

  getLivros(): Observable<any> {
    return this.http.get(BOOK_API + '/livros');
  }

  getLivrosDetails(id: string): Observable<any> {
    return this.http.get(BOOK_API + `/livros/${id}`);
  }
}
