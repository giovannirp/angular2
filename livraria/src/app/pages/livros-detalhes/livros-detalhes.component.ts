import { ActivatedRoute } from '@angular/router';
import { LivrosService } from './../../services/livros.service';
import { Livros } from './../../model/livros.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Reservas } from 'src/app/model/reserva.model';
import { RerservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-livros-detalhes',
  templateUrl: './livros-detalhes.component.html',
  styleUrls: ['./livros-detalhes.component.css']
})
export class LivrosDetalhesComponent implements OnInit {

  livros: Livros;
  formReservas: FormGroup;
  reservaslivros: Reservas[] = [];

  constructor(private livrosService: LivrosService,
              private reservasLivros: RerservasService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.formReservas = this.fb.group({
      nome: ['', [Validators.required]],
      nomelivro: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.livrosService.getLivrosDetails(id)
    .subscribe(livros => this.livros = livros);
  }

  sendForm() {
     const reserva: Reservas = {
      nome: this.nome.value,
      nomelivro: this.nomelivro.value,
      email: this.email.value
    };

     this.reservasLivros.addReservas(reserva)
     .subscribe(c => {
       this.reservaslivros.push(reserva);
       this.formReservas.reset();
     });
  }

  get nome(): AbstractControl { return this.formReservas.get('nome'); }
  get nomelivro(): AbstractControl { return this.formReservas.get('nomelivro'); }
  get email(): AbstractControl { return this.formReservas.get('email'); }


}
