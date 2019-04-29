import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicasService } from '../../musicas/musicas.service';


import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private musicasService: MusicasService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.musicasService
      .reviewsOfMusic(this.route.parent.snapshot.params['id'])
  }

}
