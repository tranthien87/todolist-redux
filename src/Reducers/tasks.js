import * as Types from "../Contants/actionsTypes";
import listOfTask from "../Components/Model/getData";

let JSONTasks = JSON.parse(localStorage.getItem("tasks"));
let initializeState = JSONTasks ? JSONTasks : [];

//let initializeState = listOfTask.List;

let taskReducer = (state = initializeState, action) => {
  switch (action.Types) {
    case Types.LIST_TASKS:
      return state;

    case Types.INITIALIZE_TASKS:
      console.log(123);
      localStorage.setItem("tasks", JSON.stringify(listOfTask.List));
      window.location.reload();
      break;
    default:
      break;
  }
  return state;
};
export default taskReducer;
