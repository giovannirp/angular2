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
    this.carregarReservas();
  }

  delete(id) {
    this.reservasService.removeLivros(id)
    .subscribe(result => {
      console.log(result);
      /*this.listaReservas = this.listaReservas.filter(x => x.id !== id);*/
      this.carregarReservas();
    });
  }

  alterar(reserva: Reservas) {
    reserva.nome = reserva.nome + ' Alterado';
    reserva.email = ' Email tatu';
    this.reservasService.alterarLivros(reserva)
    .subscribe(result => {
      console.log('sucesso!');
      this.carregarReservas();
    });
  }

  private carregarReservas() {
    this.reservasService.getReservas()
    .subscribe(listaReservas => this.listaReservas = listaReservas);
  }

}
