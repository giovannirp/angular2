import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RerservasService } from './../../services/reservas.service';
import { Reservas } from './../../model/reserva.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})


export class ReservasComponent implements OnInit {

  listaReservas: Reservas[] = [];

  constructor(private reservasService: RerservasService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }

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
    this.messageDelete();
  }

  messageDelete() {
    this.toastr.success('Excluindo com sucesso!', 'Exclusão!');
  }


  private carregarReservas() {
    /*const id = String(this.route.snapshot.paramMap.get('id'));*/
    this.reservasService.getReservas()
    .subscribe(listaReservas => this.listaReservas = listaReservas);

    /*
    this.reservasService.getLivrosId(id)
    .subscribe(listaReservas => this.listaReservas = listaReservas);
    */

  }

}
