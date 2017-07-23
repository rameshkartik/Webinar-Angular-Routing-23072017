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
var TaskService_1 = require("./TaskService");
var TaskDetailComponent = (function () {
    function TaskDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.service.getTask(+params['Id']); }).subscribe(function (task) { return _this.task = task; });
    };
    TaskDetailComponent.prototype.gotoTasks = function () {
        var TaskId = this.task ? this.task.TaskId : null;
        this.router.navigate(['/Tasks', { TaskId: TaskId, foo: 'foo' }]);
    };
    return TaskDetailComponent;
}());
TaskDetailComponent = __decorate([
    core_1.Component({
        template: "<h2>Critical Task Detail<h2>\n            <div *ngIf=\"task\">\n             <h3>\"{{task.TaskDescription}}\"</h3>\n            <div>\n             <label>TaskId:</label>{{task.TaskId}}</div>\n            <div>\n             <label>TaskDescription:</label>\n             <input [(ngModel)]=\"task.TaskDescription\" placeholder=\"TaskDescription\"/>\n            </div>\n            <p>\n                <button (click)=\"gotoTasks()\">Back</button>\n            </p>\n            </div>\n"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        TaskService_1.TaskService])
], TaskDetailComponent);
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=TaskDetailComponent.js.map