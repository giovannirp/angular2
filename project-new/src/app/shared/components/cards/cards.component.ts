import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  array = [
    {
      name: 'Avon Store',
      desconto: '5% de desconto',
      imgPath: 'assets/img/img-box.png',
      description: '5% de desconto através do hotsite da parceria. Não cumulativo com outras promoções',
    },
    {
      name: 'Extra',
      desconto: '13% de desconto',
      imgPath: 'assets/img/img-box.png',
      description: '0% de desconto através do hotsite da parceria. Não cumulativo com outras promoções',
    },
    {
      name: 'Onofre',
      desconto: '3% de desconto',
      imgPath: 'assets/img/img-box.png',
      description: '1% de desconto através do hotsite da parceria. Não cumulativo com outras promoções',
    },
  ];

  ngOnInit() {
  }

}
