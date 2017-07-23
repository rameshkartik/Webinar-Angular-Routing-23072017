import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './EmployeeListComponent';
import { EmployeeDetailComponent } from './EmployeeDetailComponent';
import { RouterModule, Routes } from '@angular/router';

const empRoutes: Routes = [
    {  path: 'Employees', component: EmployeeListComponent },
    {  path: 'Employee/:EmpCode', component: EmployeeDetailComponent }
];

@NgModule(
    {
        imports: [RouterModule.forChild(empRoutes)],
        exports: [RouterModule]
    })
export class EmployeeRoutingModule { }