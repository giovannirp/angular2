import { Cards } from './../../../model/cards.model';
import { CardsService } from './../../../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: Cards;

  constructor(private cardService: CardsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.cardService.getCardId(id)
    .subscribe(card => this.card = card);

  }

}
