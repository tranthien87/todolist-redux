import Task from './Task';
import ListOfTask from'./ListOfTask';
import {TaskData} from './TaskData';


const listOfTask = new ListOfTask();
for(let task of TaskData){
    let id = task.id;
    let name = task.name;
    let labelArr = task.labelArr;
    let priority = task.priority;
    let memberIdArr = task.memberIdArr;
    let status = task.status;
    let description = task.description;

    let newTask = new Task(id, name, labelArr, priority, memberIdArr, status, description);
    listOfTask.addTask(newTask);
}
export default listOfTask;