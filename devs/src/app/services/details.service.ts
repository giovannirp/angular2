import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LINK_API } from '../app.api';


@Injectable({
  providedIn: 'root',
})

export class DetailsService {
  constructor(private http: HttpClient) {}

  getDails(): Observable<any> {
    return this.http.get(LINK_API + '/apis');
  }
}
