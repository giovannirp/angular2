import { BOOK_API } from './../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservas } from '../model/reserva.model';
import { ErrorHandler } from '../app.error-handler';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RerservasService {
  constructor(private http: HttpClient) {}

  addReservas(reserva: Reservas): Observable<any> {
    return this.http.post<Reservas>(BOOK_API + '/reservas', reserva)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

  getReservas(): Observable<any> {
    return this.http.get(BOOK_API + '/reservas')
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

  removeLivros(id: string): Observable<any> {
    return this.http.delete(BOOK_API + `/reservas/${id}`)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

  alterarLivros(reserva: Reservas): Observable<any> {
    return this.http.put(BOOK_API + `/reservas/${reserva.id}`, reserva)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }
}
