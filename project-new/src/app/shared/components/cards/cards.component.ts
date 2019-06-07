import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';

import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards()
    .subscribe(cards => this.cards = cards);
  }

}
