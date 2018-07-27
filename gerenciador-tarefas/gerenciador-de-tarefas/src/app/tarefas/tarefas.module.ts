import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefasService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadNovoComponent } from './cad-novo/cad-novo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
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
