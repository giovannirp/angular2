import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefasService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadNovoComponent } from './cad-novo/cad-novo.component';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { HomeComponent } from './home/home.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';
import { ListaTelefoneComponent } from './lista-telefone/lista-telefone.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTarefaComponent,
    CadNovoComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    HomeComponent,
    TarefaConcluidaDirective,
    ListaTelefoneComponent
  ],
  providers: [
    TarefasService
  ]
})
export class TarefasModule { }
