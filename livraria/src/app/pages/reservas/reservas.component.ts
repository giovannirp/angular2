import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/model/reserva.model';
import { RerservasService } from 'src/app/services/reservas.service';

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
