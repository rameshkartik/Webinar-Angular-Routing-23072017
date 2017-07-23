export class EmployeeTask {

    public TaskCode: number  = 100;
    public TaskName: string = "High Priority Task";

    constructor(tCode: number, tName: string) {
        this.TaskCode = tCode;
        this.TaskName = tName;
    }
}