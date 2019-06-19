import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { MEAT_API } from '../app.api';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler';


@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(private http: HttpClient) { }

  addContact(contact: Contact): Observable<any> {
    return this.http.post<Contact>(MEAT_API + '/contact', contact)
      .pipe(
        catchError(ErrorHandler.handlerError)
      );
  }

  getContact(): Observable<any> {
    return this.http.get(MEAT_API + '/contact')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }


}
