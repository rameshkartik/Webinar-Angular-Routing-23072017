import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

import { EmployeeTaskListComponent } from './EmployeeTaskListComponent';
import { EmployeeTaskDetailComponent } from './EmployeeTaskDetailComponent';

import { EmployeeTaskService } from './EmployeeTaskService';
import { EmployeeTaskRoutingModule } from './EmployeeTaskRoutingModule';

@NgModule(
    {
        imports: [CommonModule, FormsModule, EmployeeTaskRoutingModule],
        declarations: [EmployeeTaskListComponent, EmployeeTaskDetailComponent],
        providers: [EmployeeTaskService]
    })
export class EmployeeTaskModule { }
