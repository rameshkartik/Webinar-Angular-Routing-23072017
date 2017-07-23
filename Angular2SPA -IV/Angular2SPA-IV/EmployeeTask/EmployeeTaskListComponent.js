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
var EmployeeTaskListComponent = (function () {
    function EmployeeTaskListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    EmployeeTaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.debug(this.Employees);
        this.EmployeeTasks = this.route.params
            .switchMap(function (params) {
            _this.SelectedTaskCode = +params['id'];
            return _this.service.getEmployeeTasks();
        });
    };
    EmployeeTaskListComponent.prototype.isSelected = function (emp) { return emp.TaskCode === this.SelectedTaskCode; };
    EmployeeTaskListComponent.prototype.onSelect = function (emp) {
        this.router.navigate(['/EmployeeTask', emp.TaskCode]);
    };
    return EmployeeTaskListComponent;
}());
EmployeeTaskListComponent = __decorate([
    core_1.Component({
        template: "<h2> Task List <h2>\n                   <h2>        \n                   <ul class=\"items\">\n                    <li *ngFor=\"let EmployeeTask of EmployeeTasks | async\"\n                    [class.selected]=\"isSelected(EmployeeTask)\"\n                    (click)=\"onSelect(EmployeeTask)\">\n                    <span class=\"badge\">{{ EmployeeTask.TaskCode }}</span> {{ EmployeeTask.TaskName }}\n                    </li>\n                   </ul>\n                   <button routerLink=\"/EmployeeTasks\"> Go to Employees Tasks</button>\n                   </h2>"
    }),
    __metadata("design:paramtypes", [EmployeeTaskService_1.EmployeeTaskService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmployeeTaskListComponent);
exports.EmployeeTaskListComponent = EmployeeTaskListComponent;
//# sourceMappingURL=EmployeeTaskListComponent.js.map