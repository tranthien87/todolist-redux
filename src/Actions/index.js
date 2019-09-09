import * as Types from "../Contants/actionsTypes";
export const ListTasks = () => {
  return {
    type: Types.LIST_TASKS
  };
};

export const initializeTasks = () => {
  console.log(333);
  return {
    type: Types.INITIALIZE_TASKS
  }
};
