import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.scss']
})
export class InformacaoProdutoComponent implements OnInit {

  @Input() card: Card;
  constructor() { }

  ngOnInit() {
    /*setTimeout(() => this.card.mensagemProduto = 'Nova Mensagem', 3000);*/
  }

}
