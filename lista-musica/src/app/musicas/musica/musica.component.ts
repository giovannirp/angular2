import { Component, OnInit, Input } from '@angular/core';

import { Musica } from './musica.model';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {

  @Input() musica: Musica

  constructor() { }

  ngOnInit() {
  }

}
