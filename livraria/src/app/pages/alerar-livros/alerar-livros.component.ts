import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RerservasService } from 'src/app/services/reservas.service';
import { Reservas } from 'src/app/model/reserva.model';

@Component({
  selector: 'app-alerar-livros',
  templateUrl: './alerar-livros.component.html',
  styleUrls: ['./alerar-livros.component.css']
})
export class AlerarLivrosComponent implements OnInit {

  reservasId: Reservas;

  constructor(private reservaService: RerservasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.reservaService.getLivrosId(id)
    .subscribe(reservasId => this.reservasId = reservasId);
  }

}
