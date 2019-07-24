import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from './../../services/livros.service';
import { Livros } from './../../model/livros.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Reservas } from 'src/app/model/reserva.model';
import { RerservasService } from 'src/app/services/reservas.service';

declare var $: any;

@Component({
  selector: 'app-livros-detalhes',
  templateUrl: './livros-detalhes.component.html',
  styleUrls: ['./livros-detalhes.component.css']
})
export class LivrosDetalhesComponent implements OnInit {

  livro: Livros;
  formReservas: FormGroup;
  reservaslivros: Reservas[] = [];

  constructor(private livrosService: LivrosService,
              private reservasLivros: RerservasService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.formReservas = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      nomelivro: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.livrosService.getLivrosDetails(id)
    .subscribe(livro => {
      this.livro = livro;
      /* setValue */
      this.nomelivro.setValue(livro.name);
    });
  }

  hideModal() {
    $('#reservaLivros').modal('hide');
  }

  messageAdd() {
    $('#mensagemCadastro').modal('show');
    setTimeout(() => {
      this.router.navigate(['/reservas']);
      $('#mensagemCadastro').modal('hide');
    }, 1500);
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
     /*removendo modal */
     this.hideModal();
     this.messageAdd();
  }

  get nome(): AbstractControl { return this.formReservas.get('nome'); }
  get nomelivro(): AbstractControl { return this.formReservas.get('nomelivro'); }
  get email(): AbstractControl { return this.formReservas.get('email'); }


}
