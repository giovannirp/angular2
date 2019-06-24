import { Details } from './../../../models/details.model';
import { DetailsService } from './../../../services/details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail: Details;

  constructor(private detailService: DetailsService) { }

  ngOnInit() {
    this.detailService.getDails()
    .subscribe(detail => this.detail = detail);
  }

}
