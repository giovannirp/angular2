import { ActivatedRoute } from '@angular/router';
import { LivrosService } from './../../../services/livros.service';
import { Livros } from './../../../model/livros.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-details',
  templateUrl: './livros-details.component.html',
  styleUrls: ['./livros-details.component.css']
})
export class LivrosDetailsComponent implements OnInit {

  livros: Livros;

  constructor(private livrosService: LivrosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = String(this.route.snapshot.paramMap.get('id'));
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.livrosService.getLivrosDetails(id)
    .subscribe(livros => this.livros = livros);
  }

}
