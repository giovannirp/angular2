import { Component, OnInit } from '@angular/core';
import { Depoimento } from './depoimento/depoimento.model';
import { DepoimentoService } from './depoimento.service';

@Component({
  selector: 'mt-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {

  depoimentos: Depoimento[]


  constructor(private depoimentoService: DepoimentoService) { }

  ngOnInit() {
    this.depoimentoService.depoimentos()
      .subscribe(depoimentos => this.depoimentos = depoimentos)
  }

}
