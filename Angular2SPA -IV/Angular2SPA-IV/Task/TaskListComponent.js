"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TaskService_1 = require("../Task/TaskService");
var TaskListComponent = (function () {
    function TaskListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Tasks = this.route.params.
            switchMap(function (params) {
            _this.SelectedTaskId = +params['id'];
            return _this.service.getTasks();
        });
    };
    TaskListComponent.prototype.isSelected = function (tsk) {
        return tsk.TaskId == this.SelectedTaskId;
    };
    TaskListComponent.prototype.OnSelect = function (tsk) {
        this.router.navigate(['/Task', tsk.TaskId]);
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    core_1.Component({
        template: "<h2> Critical Task List </h2>\n                   <h2>\n                   <ul class=\"items\">\n                   <li *ngFor=\"let Task of Tasks | async \"\n                   [class.selected]=\"isSelected(Task)\"\n                   (click)=\"OnSelect(Task)\">\n                   <span class=\"badge\">{{Task.TaskId}} </span> {{ Task.TaskDescription }}\n                   </li>\n                   </ul>\n                    <button routerLink=\"/Tasks\">Go to Tasks </button>\n                   </h2>\n                    "
    }),
    __metadata("design:paramtypes", [TaskService_1.TaskService,
        router_1.ActivatedRoute,
        router_1.Router])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=TaskListComponent.js.map