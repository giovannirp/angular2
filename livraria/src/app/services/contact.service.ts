import { catchError } from 'rxjs/operators';
import { BOOK_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Observable } from 'rxjs';
import { ErrorHandler } from '../app.error-handler';



@Injectable({
  providedIn: 'root',
})

export class ContactService {
  constructor(private http: HttpClient) {}

  addContact(contact: Contact): Observable<any> {
    return this.http.post<Contact>(BOOK_API + '/contact', contact)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

  listContact(): Observable<any> {
    return this.http.get(BOOK_API + '/contact')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }
}
