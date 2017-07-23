"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var TaskListComponent_1 = require("./TaskListComponent");
var TaskDetailComponent_1 = require("./TaskDetailComponent");
var TaskService_1 = require("./TaskService");
var TaskRoutingModule_1 = require("./TaskRoutingModule");
var TaskModule = (function () {
    function TaskModule() {
    }
    return TaskModule;
}());
TaskModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, TaskRoutingModule_1.TaskRoutingModule],
        declarations: [TaskListComponent_1.TaskListComponent, TaskDetailComponent_1.TaskDetailComponent],
        providers: [TaskService_1.TaskService]
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=TaskModule.js.map