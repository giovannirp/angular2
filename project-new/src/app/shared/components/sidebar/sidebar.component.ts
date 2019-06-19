import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  news: News[] = [];
  formNews: FormGroup;

  constructor(private newsService: NewsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formNews = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendNews() {
    const news: News = {
      nome: this.nome.value,
      email: this.email.value,
    };

    this.newsService.addNews(news)
    .subscribe(c => {
      this.news.push(news);
      this.formNews.reset();
    });
  }


  get nome(): AbstractControl { return this.formNews.get('nome'); }
  get email(): AbstractControl { return this.formNews.get('email'); }

}
