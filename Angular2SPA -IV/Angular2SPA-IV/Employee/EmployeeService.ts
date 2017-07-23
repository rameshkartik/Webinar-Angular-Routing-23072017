import { Injectable } from '@angular/core';
import { Employee } from './Employee';

let Employees = [
    new Employee(501, "Rameshkartik"),
    new Employee(601, "Rajesh"),
    new Employee(701, "Sam"),
    new Employee(801, "Kesavan"),
    new Employee(901, "Raman")
];

let EmployeesPromise = Promise.resolve(Employees);    

@Injectable()
export class EmployeeService {

    getEmployees() {
        return EmployeesPromise;
    }
    getEmployee(EmpCode: number | string) {
        return EmployeesPromise
            .then(Employees => Employees.find(Employee => Employee.EmpCode === +EmpCode));
    }
}