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
var EmployeeService_1 = require("./EmployeeService");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.debug(this.Employees);
        this.Employees = this.route.params
            .switchMap(function (params) {
            _this.SelectedEmpCode = +params['id'];
            return _this.service.getEmployees();
        });
    };
    EmployeeListComponent.prototype.isSelected = function (emp) { return emp.EmpCode === this.SelectedEmpCode; };
    EmployeeListComponent.prototype.onSelect = function (emp) {
        this.router.navigate(['/Employee', emp.EmpCode]);
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        template: "<h2> Employees List <h2>\n                   <h2>        \n                   <ul class=\"items\">\n                    <li *ngFor=\"let Employee of Employees | async\"\n                    [class.selected]=\"isSelected(Employee)\"\n                    (click)=\"onSelect(Employee)\">\n                    <span class=\"badge\">{{ Employee.EmpCode }}</span> {{ Employee.EmpName }}\n                    </li>\n                   </ul>\n                   <button routerLink=\"/Employees\"> Go to Employees </button>\n                   </h2>"
    }),
    __metadata("design:paramtypes", [EmployeeService_1.EmployeeService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=EmployeeListComponent.js.map