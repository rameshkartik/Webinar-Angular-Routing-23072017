import { Component } from '@angular/core';

@Component(
    {
        selector: 'my-app',
        template: '<h1> Employee Application <h1>' +
        `<nav>
        <a routerLink="/Employees" routerLinkActive="active"> Employees  </a>
        <a routerLink="/EmployeeTasks" routerLinkActive="active"> Tasks </a>
        <a routerLink="/Tasks" routerLinkActive="active"> Critical Tasks </a>
        </nav>
        <router-outlet></router-outlet>`

    }
)
        
export class AppComponent { }