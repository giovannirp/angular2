import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-list-email',
  templateUrl: './list-email.component.html',
  styleUrls: ['./list-email.component.scss']
})
export class ListEmailComponent implements OnInit {

  listaEmail: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getEmail()
    .subscribe(listaEmail => this.listaEmail = listaEmail);
  }

}
