import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from './Employee';
import { EmployeeService } from './EmployeeService';
//import { slideInDownAnimation } from '../Employee/animations';

@Component(
    {
        template:
        `<h2>Employees Detail<h2>
            <div *ngIf="emp">
             <h3>"{{emp.EmpName}}"</h3>
            <div>
             <label>EmpCode:</label>{{emp.EmpCode}}</div>
            <div>
             <label>EmployeeName:</label>
             <input [(ngModel)]="emp.EmpName" placeholder="EmpName"/>
            </div>
            <p>
                <button (click)="gotoEmployees()">Back</button>
            </p>
            </div>`
        
    })
export class EmployeeDetailComponent implements OnInit {
    //@HostBinding('@routeAnimation') routeAnimation = true;
    //@HostBinding('style.display') display = 'block';
    //@HostBinding('style.position') position = 'absolute';

    emp: Employee;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EmployeeService
    ) { }

    ngOnInit() {
        this.route.params.
            switchMap((params: Params) => this.service.getEmployee(+params['EmpCode']))
            .subscribe((emp: Employee) => this.emp = emp);

    }

    gotoEmployees() {
        let EmpCode = this.emp ? this.emp.EmpCode : null;
        this.router.navigate(['/Employees', { EmpCode: EmpCode, foo: 'foo' }]);
    }
}