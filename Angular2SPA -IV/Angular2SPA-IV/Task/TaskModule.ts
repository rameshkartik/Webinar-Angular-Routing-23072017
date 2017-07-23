import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './TaskListComponent';
import { TaskDetailComponent } from './TaskDetailComponent';

import { TaskService } from './TaskService';
import { TaskRoutingModule } from './TaskRoutingModule';

@NgModule(
    {
        imports: [CommonModule, FormsModule,TaskRoutingModule],
        declarations: [TaskListComponent, TaskDetailComponent],
        providers: [TaskService]
    })
export class TaskModule { }