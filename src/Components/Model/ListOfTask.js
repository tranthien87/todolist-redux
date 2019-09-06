export default class ListOfTask {
    constructor() {
        this.List = [];
    }
    addTask =(task) => {
        this.List = [...this.List, task];
    }
    findTask = (id) => {
        for(let task of this.List){
            if(task.id === id){
                return task;
            }
        }
        return null;
    }
    findIndexTask = (id) => {
        for (let index in this.List){
            if(this.List[index].id === id){
                return index;
            }
        }
        return null;
    }
}