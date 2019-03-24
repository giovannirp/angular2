import { Component, OnInit, Input } from '@angular/core';
import { Depoimento } from './depoimento.model';

@Component({
  selector: 'mt-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.scss']
})
export class DepoimentoComponent implements OnInit {

  @Input() depoimento: Depoimento
  

  constructor() { }

  ngOnInit() {
  }

}
