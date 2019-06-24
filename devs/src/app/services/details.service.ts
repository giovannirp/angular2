import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class DetailsService {
  constructor(private http: HttpClient) {}

  getDails(): Observable<any> {
    return this.http.get('https://api.github.com/users/giovannirp');
    console.log(this.http);
  }
}
