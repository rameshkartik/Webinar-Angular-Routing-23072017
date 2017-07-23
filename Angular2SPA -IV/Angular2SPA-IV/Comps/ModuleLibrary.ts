import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './AppComponent';
import { RoutingModule } from './Routing';
import { EmployeeModule } from '../Employee/EmployeeModule';
import { EmployeeTaskModule } from '../EmployeeTask/EmployeeTaskModule';
import { TaskModule } from '../Task/TaskModule';
import { PageNotFoundComponent } from './PageNotFoundComponent';

@NgModule(
    {
        imports: [
            BrowserModule,
            FormsModule,
            EmployeeModule,
            RoutingModule,
            TaskModule,
            EmployeeTaskModule,
        ],
        declarations: [
            AppComponent,
            //TaskListComponent,
            PageNotFoundComponent
        ],
        bootstrap: [AppComponent]

    })
export class ModuleLibrary { }
