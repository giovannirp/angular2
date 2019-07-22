import { Component, OnInit } from '@angular/core';

import { RerservasService } from './../../services/reservas.service';
import { Reservas } from './../../model/reserva.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  listaReservas: Reservas[] = [];

  constructor(private reservasService: RerservasService) { }

  ngOnInit() {
    this.reservasService.getReservas()
    .subscribe(listaReservas => this.listaReservas = listaReservas);
  }

}
