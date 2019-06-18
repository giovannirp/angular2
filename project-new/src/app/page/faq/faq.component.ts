import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/models/faq.model';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Faq[];

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getFaq()
    .subscribe(faqs => this.faqs = faqs);
  }

}
