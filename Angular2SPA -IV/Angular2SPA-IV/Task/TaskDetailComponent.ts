import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Task } from './Task';
import { TaskService } from './TaskService';

@Component(
    {
        template: `<h2>Critical Task Detail<h2>
            <div *ngIf="task">
             <h3>"{{task.TaskDescription}}"</h3>
            <div>
             <label>TaskId:</label>{{task.TaskId}}</div>
            <div>
             <label>TaskDescription:</label>
             <input [(ngModel)]="task.TaskDescription" placeholder="TaskDescription"/>
            </div>
            <p>
                <button (click)="gotoTasks()">Back</button>
            </p>
            </div>
`
    })
export class TaskDetailComponent implements OnInit {

    task: Task;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TaskService) {

    }

    

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.service.getTask(+params['Id'])).subscribe((task: Task) => this.task = task);
           
    }

    gotoTasks() {
        let TaskId = this.task ? this.task.TaskId : null;
        this.router.navigate(['/Tasks', { TaskId: TaskId, foo: 'foo' }]);
    }
}