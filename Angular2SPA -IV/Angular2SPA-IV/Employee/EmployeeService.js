"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_1 = require("./Employee");
var Employees = [
    new Employee_1.Employee(501, "Rameshkartik"),
    new Employee_1.Employee(601, "Rajesh"),
    new Employee_1.Employee(701, "Sam"),
    new Employee_1.Employee(801, "Kesavan"),
    new Employee_1.Employee(901, "Raman")
];
var EmployeesPromise = Promise.resolve(Employees);
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
        return EmployeesPromise;
    };
    EmployeeService.prototype.getEmployee = function (EmpCode) {
        return EmployeesPromise
            .then(function (Employees) { return Employees.find(function (Employee) { return Employee.EmpCode === +EmpCode; }); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map