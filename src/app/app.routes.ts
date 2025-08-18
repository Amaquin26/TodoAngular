import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TaskComponent } from './views/task/task.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { breadcrumb: 'Home' }
    },
    {
        path: 'task/:id',
        component: TaskComponent,
        data: { breadcrumb: 'Task Viewing' }
    }
];
