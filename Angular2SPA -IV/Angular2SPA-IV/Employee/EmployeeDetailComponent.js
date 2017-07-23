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
//import { slideInDownAnimation } from '../Employee/animations';
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) { return _this.service.getEmployee(+params['EmpCode']); })
            .subscribe(function (emp) { return _this.emp = emp; });
    };
    EmployeeDetailComponent.prototype.gotoEmployees = function () {
        var EmpCode = this.emp ? this.emp.EmpCode : null;
        this.router.navigate(['/Employees', { EmpCode: EmpCode, foo: 'foo' }]);
    };
    return EmployeeDetailComponent;
}());
EmployeeDetailComponent = __decorate([
    core_1.Component({
        template: "<h2>Employees Detail<h2>\n            <div *ngIf=\"emp\">\n             <h3>\"{{emp.EmpName}}\"</h3>\n            <div>\n             <label>EmpCode:</label>{{emp.EmpCode}}</div>\n            <div>\n             <label>EmployeeName:</label>\n             <input [(ngModel)]=\"emp.EmpName\" placeholder=\"EmpName\"/>\n            </div>\n            <p>\n                <button (click)=\"gotoEmployees()\">Back</button>\n            </p>\n            </div>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        EmployeeService_1.EmployeeService])
], EmployeeDetailComponent);
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=EmployeeDetailComponent.js.map