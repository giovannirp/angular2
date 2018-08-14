import { Component, OnInit } from '@angular/core';
import { Tel } from '../shared';

@Component({
  selector: 'app-lista-telefone',
  templateUrl: './lista-telefone.component.html',
  styleUrls: ['./lista-telefone.component.scss']
})
export class ListaTelefoneComponent implements OnInit {

  telefone: Tel[];

  constructor() { }

  tel = [
    new Tel(1, 'Diego Cavalca', '(14)98888-7777)'),
    new Tel(2, 'Luiz Carlos', '(14)98888-7777)'),
    new Tel(3, 'Jos\u00e9 Fulano', '(55)43333-2222'),
    new Tel(4, 'Jo\u00e3o dos Santos', '(11)21111-0000'),
    new Tel(4, 'Maria da Silva', '(44)65555-8888')
  ];

  ngOnInit() {

  }

  

  

}
