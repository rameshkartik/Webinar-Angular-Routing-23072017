import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeTask } from './EmployeeTask';
import { EmployeeTaskService } from './EmployeeTaskService';

@Component(
    {
        template: `<h2> Task List <h2>
                   <h2>        
                   <ul class="items">
                    <li *ngFor="let EmployeeTask of EmployeeTasks | async"
                    [class.selected]="isSelected(EmployeeTask)"
                    (click)="onSelect(EmployeeTask)">
                    <span class="badge">{{ EmployeeTask.TaskCode }}</span> {{ EmployeeTask.TaskName }}
                    </li>
                   </ul>
                   <button routerLink="/EmployeeTasks"> Go to Employees Tasks</button>
                   </h2>`              
    })
export class EmployeeTaskListComponent implements OnInit {
    EmployeeTasks: Observable<EmployeeTask[]>;

    private SelectedTaskCode: number;

    constructor(
        private service: EmployeeTaskService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        //console.debug(this.Employees);
        this.EmployeeTasks = this.route.params
            .switchMap((params: Params) => {
                this.SelectedTaskCode = +params['id'];
                return this.service.getEmployeeTasks();
            });
    }
    
    isSelected(emp: EmployeeTask) { return emp.TaskCode === this.SelectedTaskCode; }

    onSelect(emp: EmployeeTask) {
        this.router.navigate(['/EmployeeTask', emp.TaskCode]);
    }

    
    }


