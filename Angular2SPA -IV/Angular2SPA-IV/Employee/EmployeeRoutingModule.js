"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent_1 = require("./EmployeeListComponent");
var EmployeeDetailComponent_1 = require("./EmployeeDetailComponent");
var router_1 = require("@angular/router");
var empRoutes = [
    { path: 'Employees', component: EmployeeListComponent_1.EmployeeListComponent },
    { path: 'Employee/:EmpCode', component: EmployeeDetailComponent_1.EmployeeDetailComponent }
];
var EmployeeRoutingModule = (function () {
    function EmployeeRoutingModule() {
    }
    return EmployeeRoutingModule;
}());
EmployeeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(empRoutes)],
        exports: [router_1.RouterModule]
    })
], EmployeeRoutingModule);
exports.EmployeeRoutingModule = EmployeeRoutingModule;
//# sourceMappingURL=EmployeeRoutingModule.js.map