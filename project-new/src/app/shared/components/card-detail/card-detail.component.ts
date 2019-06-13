import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  card: Card;
  @Input() depoimento: Card;

  constructor(private cardService: CardService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    /*console.log(this.route.snapshot.paramMap);*/

    this.cardService.getCardId(id)
    .subscribe(card => this.card = card);

    this.cardService.getDepositions()
    .subscribe(depo => this.depoimento = depo);

  }

}
