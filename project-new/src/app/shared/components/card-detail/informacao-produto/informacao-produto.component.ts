import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.scss']
})
export class InformacaoProdutoComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {

  }

}
