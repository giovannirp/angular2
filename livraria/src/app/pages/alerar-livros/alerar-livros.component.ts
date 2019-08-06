import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { LivrosService } from './../../services/livros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RerservasService } from 'src/app/services/reservas.service';
import { Reservas } from 'src/app/model/reserva.model';

@Component({
  selector: 'app-alerar-livros',
  templateUrl: './alerar-livros.component.html',
  styleUrls: ['./alerar-livros.component.css']
})
export class AlerarLivrosComponent implements OnInit {

  reservasid: Reservas;
  formAltearReserva: FormGroup;
  reservaslivros: Reservas[] = [];
  currentId: string;

  constructor(private reservaService: RerservasService,
              private route: ActivatedRoute,
              private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.currentId = String(this.route.snapshot.paramMap.get('id'));

    this.reservaService.getLivrosId(this.currentId)
    .subscribe(reservasid => this.reservasid = reservasid);


    this.formAltearReserva = this.fb.group({
      nome: ['', [Validators.required]],
      nomelivro: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.reservaService.getLivrosId(this.currentId)
    .subscribe(reservasid => {
      this.reservasid = reservasid;

      /*  this.nomelivro.setValue(livro.name); */
      this.nome.setValue(reservasid.nome);
      this.nomelivro.setValue(reservasid.nomelivro);
      this.email.setValue(reservasid.email);
    });
  }

  alterar(reservas: Reservas) {
    const reserva: Reservas = {
      id: this.currentId,
      nome: this.nome.value,
      nomelivro: this.nomelivro.value,
      email: this.email.value
    };

    this.reservaService.alterarLivros(reserva)
      .subscribe(result => {
        this.reservaslivros.push(reserva);
      });
  }

  get nome(): AbstractControl {
    return this.formAltearReserva.get('nome');
  }

  get nomelivro(): AbstractControl {
    return this.formAltearReserva.get('nomelivro');
  }

  get email(): AbstractControl {
    return this.formAltearReserva.get('email');
  }

}
