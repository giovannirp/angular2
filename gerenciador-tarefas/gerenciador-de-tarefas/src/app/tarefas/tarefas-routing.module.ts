import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadNovoComponent } from './cad-novo';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { HomeComponent } from './home';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/home'
    },
    {
        path: 'tarefas/home',
        component: HomeComponent
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadNovo',
        component: CadNovoComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }

    
];
