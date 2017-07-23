import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeTask } from './EmployeeTask';
import { EmployeeTaskService } from './EmployeeTaskService';
//import { slideInDownAnimation } from '../Employee/animations';

@Component(
    {
        template:
        `<h2>Employees Task Detail<h2>
            <div *ngIf="emp">
             <h3>"{{emp.TaskName}}"</h3>
            <div>
             <label>TaskCode:</label>{{emp.TaskCode}}</div>
            <div>
             <label>TaskName:</label>
             <input [(ngModel)]="emp.TaskName" placeholder="TaskName"/>
            </div>
            <p>
                <button (click)="gotoEmployeeTasks()">Back</button>
            </p>
            </div>`
        
    })
export class EmployeeTaskDetailComponent implements OnInit {
    //@HostBinding('@routeAnimation') routeAnimation = true;
    //@HostBinding('style.display') display = 'block';
    //@HostBinding('style.position') position = 'absolute';

    emp: EmployeeTask;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeeTaskService
    ) { }

    ngOnInit() {
        this.route.params.
            switchMap((params: Params) => this.service.getEmployeeTask(+params['TaskCode']))
            .subscribe((emp: EmployeeTask) => this.emp = emp);

    }

    gotoEmployeeTasks() {
        let TaskCode = this.emp ? this.emp.TaskCode : null;
        this.router.navigate(['/EmployeeTasks', { TaskCode: TaskCode, foo: 'foo' }]);
    }
}