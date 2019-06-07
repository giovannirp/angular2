import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from 'src/app/app.api';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';



@Injectable()
export class AboutService {

  constructor(private http: HttpClient) {}

  getAbaout(): Observable<any> {
    return this.http.get(MEAT_API + '/about')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }


}
