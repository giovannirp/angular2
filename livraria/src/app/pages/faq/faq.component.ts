import { Faq } from './../../model/faq.model';
import { FaqService } from './../../services/faq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  listaFaq: Faq[] = [];

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getFaq()
    .subscribe(listaFaq => this.listaFaq = listaFaq);
  }

}
