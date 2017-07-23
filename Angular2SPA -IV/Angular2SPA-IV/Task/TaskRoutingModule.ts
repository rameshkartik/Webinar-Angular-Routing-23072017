import { NgModule } from '@angular/core';
import { TaskListComponent } from './TaskListComponent';
import { TaskDetailComponent } from './TaskDetailComponent';
import { RouterModule, Routes } from '@angular/router';

const TaskRoutes: Routes = [
    { path: 'Tasks', component: TaskListComponent },
    { path: 'Task/:Id', component: TaskDetailComponent }
];


@NgModule(
    {
        imports: [RouterModule.forChild(TaskRoutes)],
        exports: [RouterModule]
    })
export class TaskRoutingModule {

}