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
var EmployeeTaskService_1 = require("./EmployeeTaskService");
//import { slideInDownAnimation } from '../Employee/animations';
var EmployeeTaskDetailComponent = (function () {
    function EmployeeTaskDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    EmployeeTaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) { return _this.service.getEmployeeTask(+params['TaskCode']); })
            .subscribe(function (emp) { return _this.emp = emp; });
    };
    EmployeeTaskDetailComponent.prototype.gotoEmployeeTasks = function () {
        var TaskCode = this.emp ? this.emp.TaskCode : null;
        this.router.navigate(['/EmployeeTasks', { TaskCode: TaskCode, foo: 'foo' }]);
    };
    return EmployeeTaskDetailComponent;
}());
EmployeeTaskDetailComponent = __decorate([
    core_1.Component({
        template: "<h2>Employees Task Detail<h2>\n            <div *ngIf=\"emp\">\n             <h3>\"{{emp.TaskName}}\"</h3>\n            <div>\n             <label>TaskCode:</label>{{emp.TaskCode}}</div>\n            <div>\n             <label>TaskName:</label>\n             <input [(ngModel)]=\"emp.TaskName\" placeholder=\"TaskName\"/>\n            </div>\n            <p>\n                <button (click)=\"gotoEmployeeTasks()\">Back</button>\n            </p>\n            </div>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        EmployeeTaskService_1.EmployeeTaskService])
], EmployeeTaskDetailComponent);
exports.EmployeeTaskDetailComponent = EmployeeTaskDetailComponent;
//# sourceMappingURL=EmployeeTaskDetailComponent.js.map