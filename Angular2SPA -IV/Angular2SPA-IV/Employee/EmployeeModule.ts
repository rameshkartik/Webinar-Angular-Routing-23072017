import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

import { EmployeeListComponent } from './EmployeeListComponent';
import { EmployeeDetailComponent } from './EmployeeDetailComponent';

import { EmployeeService } from './EmployeeService';
import { EmployeeRoutingModule } from './EmployeeRoutingModule';

@NgModule(
    {
        imports: [CommonModule, FormsModule, EmployeeRoutingModule],
        declarations: [EmployeeListComponent, EmployeeDetailComponent],
        providers: [EmployeeService]
    })
export class EmployeeModule { }
