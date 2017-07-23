"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Task_1 = require("./Task");
var Tasks = [
    new Task_1.Task(100, 'Critical Task 1'),
    new Task_1.Task(101, 'Critical Task 2'),
    new Task_1.Task(102, 'Critical Task 3'),
    new Task_1.Task(103, 'Critical Task 4'),
    new Task_1.Task(104, 'Critical Task 5')
];
var TasksPromise = Promise.resolve(Tasks);
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return TasksPromise;
    };
    TaskService.prototype.getTask = function (taskId) {
        return TasksPromise.then(function (Tasks) { return Tasks.find(function (Task) { return Task.TaskId === +taskId; }); });
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map