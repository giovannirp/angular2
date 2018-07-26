import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefaComponent } from './listar';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListarTarefaComponent
  ],
  providers: [
    TarefasService
  ]
})
export class TarefasModule { }
