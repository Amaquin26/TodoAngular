import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TaskComponent } from './views/task/task.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'task/:id',
        component: TaskComponent
    }
];
