import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from '../Task/Task';
import { TaskService } from '../Task/TaskService';

@Component(
    {
        template: `<h2> Critical Task List </h2>
                   <h2>
                   <ul class="items">
                   <li *ngFor="let Task of Tasks | async "
                   [class.selected]="isSelected(Task)"
                   (click)="OnSelect(Task)">
                   <span class="badge">{{Task.TaskId}} </span> {{ Task.TaskDescription }}
                   </li>
                   </ul>
                    <button routerLink="/Tasks">Go to Tasks </button>
                   </h2>
                    `
    })


export class TaskListComponent implements OnInit {

    Tasks: Observable<Task[]>;

    private SelectedTaskId: number;

    constructor(
        private service: TaskService,
        private route: ActivatedRoute,
        private router: Router) {
    }


    ngOnInit() {
        this.Tasks = this.route.params.
            switchMap((params : Params) => {
            this.SelectedTaskId = +params['id'];
            return this.service.getTasks();
        });
    }

    isSelected(tsk: Task) {
        return tsk.TaskId == this.SelectedTaskId;
    }

    OnSelect(tsk: Task) {
        this.router.navigate(['/Task',tsk.TaskId]);
    }
}