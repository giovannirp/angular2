import { Component, OnInit } from '@angular/core';
import { CardService } from '../cards/card.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../cards/card/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  card: Card;
  constructor(private cardService: CardService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    /*console.log(this.route.snapshot.paramMap);*/

    this.cardService.getCardId(id)
    .subscribe(card => this.card = card);
  }

}
