"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeTaskListComponent_1 = require("./EmployeeTaskListComponent");
var EmployeeTaskDetailComponent_1 = require("./EmployeeTaskDetailComponent");
var router_1 = require("@angular/router");
var empTaskRoutes = [
    { path: 'EmployeeTasks', component: EmployeeTaskListComponent_1.EmployeeTaskListComponent },
    { path: 'EmployeeTask/:TaskCode', component: EmployeeTaskDetailComponent_1.EmployeeTaskDetailComponent }
];
var EmployeeTaskRoutingModule = (function () {
    function EmployeeTaskRoutingModule() {
    }
    return EmployeeTaskRoutingModule;
}());
EmployeeTaskRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(empTaskRoutes)],
        exports: [router_1.RouterModule]
    })
], EmployeeTaskRoutingModule);
exports.EmployeeTaskRoutingModule = EmployeeTaskRoutingModule;
//# sourceMappingURL=EmployeeTaskRoutingModule.js.map