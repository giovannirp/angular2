import { Component, OnInit } from '@angular/core';
import { Musica } from './musica/musica.model';
import { MusicasService } from './musicas.service';

@Component({
  selector: 'mt-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.scss']
})
export class MusicasComponent implements OnInit {

  musicas: Musica[]


  constructor(private musicasService: MusicasService) { }

  ngOnInit() {
    this.musicasService.musicas()
      .subscribe(musicas => this.musicas = musicas)
  }

}
