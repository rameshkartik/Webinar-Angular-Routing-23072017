import { NgModule } from '@angular/core';
import { EmployeeTaskListComponent } from './EmployeeTaskListComponent';
import { EmployeeTaskDetailComponent } from './EmployeeTaskDetailComponent';
import { EmployeeListComponent } from '../Employee/EmployeeListComponent';
import { RouterModule, Routes } from '@angular/router';

const empTaskRoutes: Routes = [
    { path: 'EmployeeTasks', component: EmployeeTaskListComponent },
    {  path: 'EmployeeTask/:TaskCode', component: EmployeeTaskDetailComponent }
];

@NgModule(
    {
        imports: [RouterModule.forChild(empTaskRoutes)],
        exports: [RouterModule]
    })
export class EmployeeTaskRoutingModule { }