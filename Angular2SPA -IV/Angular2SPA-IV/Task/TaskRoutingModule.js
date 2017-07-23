"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskListComponent_1 = require("./TaskListComponent");
var TaskDetailComponent_1 = require("./TaskDetailComponent");
var router_1 = require("@angular/router");
var TaskRoutes = [
    { path: 'Tasks', component: TaskListComponent_1.TaskListComponent },
    { path: 'Task/:Id', component: TaskDetailComponent_1.TaskDetailComponent }
];
var TaskRoutingModule = (function () {
    function TaskRoutingModule() {
    }
    return TaskRoutingModule;
}());
TaskRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(TaskRoutes)],
        exports: [router_1.RouterModule]
    })
], TaskRoutingModule);
exports.TaskRoutingModule = TaskRoutingModule;
//# sourceMappingURL=TaskRoutingModule.js.map