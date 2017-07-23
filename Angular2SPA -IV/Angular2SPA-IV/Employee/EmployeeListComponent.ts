import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from './Employee';
import { EmployeeService } from './EmployeeService';

@Component(
    {
        template: `<h2> Employees List <h2>
                   <h2>        
                   <ul class="items">
                    <li *ngFor="let Employee of Employees | async"
                    [class.selected]="isSelected(Employee)"
                    (click)="onSelect(Employee)">
                    <span class="badge">{{ Employee.EmpCode }}</span> {{ Employee.EmpName }}
                    </li>
                   </ul>
                   <button routerLink="/Employees"> Go to Employees </button>
                   </h2>`              
    })
export class EmployeeListComponent implements OnInit {
    Employees: Observable<Employee[]>;

    private SelectedEmpCode: number;

    constructor(
        private service: EmployeeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        //console.debug(this.Employees);
        this.Employees = this.route.params
            .switchMap((params: Params) => {
                this.SelectedEmpCode = +params['id'];
                return this.service.getEmployees();
            });
    }
    
    isSelected(emp: Employee) { return emp.EmpCode === this.SelectedEmpCode; }

    onSelect(emp: Employee) {
        this.router.navigate(['/Employee', emp.EmpCode]);
    }

    
    }


