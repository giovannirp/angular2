import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadNovoComponent } from './cad-novo/cad-novo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListarTarefaComponent,
    CadNovoComponent
  ],
  providers: [
    TarefasService
  ]
})
export class TarefasModule { }
