import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadNovoComponent } from './cad-novo';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadNovo',
        component: CadNovoComponent
    }
];
