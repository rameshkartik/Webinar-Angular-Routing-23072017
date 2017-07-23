import { Injectable } from '@angular/core';
import { EmployeeTask } from './EmployeeTask';

let EmployeesTasks = [
    new EmployeeTask(501, "Task 0"),
    new EmployeeTask(601, "Task 1"),
    new EmployeeTask(701, "Task 2"),
    new EmployeeTask(801, "Task 3"),
    new EmployeeTask(901, "Task 4")
];

let EmployeeTasksPromise = Promise.resolve(EmployeesTasks);    

@Injectable()
export class EmployeeTaskService {

    getEmployeeTasks() {
        return EmployeeTasksPromise;
    }
    getEmployeeTask(TaskCode: number | string) {
        return EmployeeTasksPromise
            .then(EmployeesTasks => EmployeesTasks.find(EmployeeTask => EmployeeTask.TaskCode === +TaskCode));
    }
}