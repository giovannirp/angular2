import { Component, OnInit } from '@angular/core';
import { TarefasService, Tarefa } from   '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefasService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

}
