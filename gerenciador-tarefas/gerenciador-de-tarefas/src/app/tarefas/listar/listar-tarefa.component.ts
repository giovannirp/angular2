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
    this.tarefas = [
      new Tarefa(1, "tarefa 1", true),
      new Tarefa(2,"Tarefa 2", true),
      new Tarefa(2,"Tarefa 3", false),
      new Tarefa(2,"Tarefa 4", true)
    ];
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

}
