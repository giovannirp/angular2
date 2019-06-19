import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { News } from '../models/news.model';
import { MEAT_API } from 'src/app/app.api';
import { ErrorHandler } from '../app.error-handler';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  addNews(news: News): Observable<any> {
    return this.http.post<News>(MEAT_API + '/news', news)
    .pipe(
      catchError(ErrorHandler.handlerError)
    );
  }

}
