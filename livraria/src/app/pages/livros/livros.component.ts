import { LivrosService } from './../../services/livros.service';
import { Livros } from './../../model/livros.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livros[];


  constructor(private livrosService: LivrosService) { }

  ngOnInit() {
    this.livrosService.getLivros()
    .subscribe(livros => this.livros = livros);
  }

}
