import { BOOK_API } from './../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservas } from '../model/reserva.model';
@Injectable({
  providedIn: 'root',
})
export class RerservasService {
  constructor(private http: HttpClient) {}

  addReservas(reserva: Reservas): Observable<any> {
    return this.http.post<Reservas>(BOOK_API + '/reservas', reserva);
  }
}
