"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeTask_1 = require("./EmployeeTask");
var EmployeesTasks = [
    new EmployeeTask_1.EmployeeTask(501, "Task 0"),
    new EmployeeTask_1.EmployeeTask(601, "Task 1"),
    new EmployeeTask_1.EmployeeTask(701, "Task 2"),
    new EmployeeTask_1.EmployeeTask(801, "Task 3"),
    new EmployeeTask_1.EmployeeTask(901, "Task 4")
];
var EmployeeTasksPromise = Promise.resolve(EmployeesTasks);
var EmployeeTaskService = (function () {
    function EmployeeTaskService() {
    }
    EmployeeTaskService.prototype.getEmployeeTasks = function () {
        return EmployeeTasksPromise;
    };
    EmployeeTaskService.prototype.getEmployeeTask = function (TaskCode) {
        return EmployeeTasksPromise
            .then(function (EmployeesTasks) { return EmployeesTasks.find(function (EmployeeTask) { return EmployeeTask.TaskCode === +TaskCode; }); });
    };
    return EmployeeTaskService;
}());
EmployeeTaskService = __decorate([
    core_1.Injectable()
], EmployeeTaskService);
exports.EmployeeTaskService = EmployeeTaskService;
//# sourceMappingURL=EmployeeTaskService.js.map