import { Component, OnInit } from '@angular/core';
import { CardService } from '../cards/card.service';
import { Card } from './card/card.model';

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
