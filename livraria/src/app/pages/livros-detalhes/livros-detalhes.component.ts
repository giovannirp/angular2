import { ActivatedRoute } from '@angular/router';
import { LivrosService } from './../../services/livros.service';
import { Livros } from './../../model/livros.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RerservasService } from 'src/app/services/reservas.service';
import { Reservas } from 'src/app/model/reserva.model';

@Component({
  selector: 'app-livros-detalhes',
  templateUrl: './livros-detalhes.component.html',
  styleUrls: ['./livros-detalhes.component.css']
})
export class LivrosDetalhesComponent implements OnInit {

  livros: Livros;
  reservas: Reservas;
  formReservas: FormGroup;

  constructor(private livrosService: LivrosService,
              private reservasLivros: RerservasService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.formReservas = this.fb.group({
      name: ['', [Validators.required]],
      nomelivro: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.livrosService.getLivrosDetails(id)
    .subscribe(livros => this.livros = livros);
  }

  sendForm() {
     const reservas: Reservas = {
       nome: this.nome.value,
       nomelivro: this.nomelivro.value,
       email: this.email.value
     };
  }


  get nome(): AbstractControl { return this.formReservas.get('nome'); }
  get nomelivro(): AbstractControl { return this.formReservas.get('nomelivro'); }
  get email(): AbstractControl { return this.formReservas.get('email'); }

}
