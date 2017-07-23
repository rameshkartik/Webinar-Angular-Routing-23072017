export class Task {

    public TaskId: number = 1;
    public TaskDescription: string = "Task Sample";

    constructor(taskId: number,taskDesc:string) {
        this.TaskId = taskId;
        this.TaskDescription = taskDesc;
    }
}