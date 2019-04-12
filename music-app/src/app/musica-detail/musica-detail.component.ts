import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MusicasService } from '../musicas/musicas.service';
import { Musica } from '../musicas/musica/musica.model';

@Component({
  selector: 'mt-musica-detail',
  templateUrl: './musica-detail.component.html'
})
export class MusicaDetailComponent implements OnInit {

  musica: Musica

  constructor(private musicasService: MusicasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.musicasService.musicaById(this.route.snapshot.params['id'])
      .subscribe(musica => this.musica = musica)
  }

}
