import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { TaskListComponent } from './TaskListComponent';
import { AppComponent } from './AppComponent';
import { PageNotFoundComponent } from './PageNotFoundComponent';

const appRoutes: Routes = [
    //{ path: '/Tasks', component: TaskListComponent },
    { path: '', redirectTo: '/EmployeesList', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }