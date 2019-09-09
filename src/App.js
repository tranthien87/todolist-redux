import React, { Component } from "react";
import "./App.css";
// import components
import ModalPopup from './Components/ModalPopup';
import Control from './Components/Controls';
import TaskItems from './Components/TaskItems';

var randomid = require("random-id");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //tasks:[], 
      taskEditting: null,
      isAddNewTask: true,
      // filter
      filterType: '',
      filterProgress: -1,
      filterSearch:'',
      sortType: ''
    }
  }
  
  // generateData = () => {
  //   localStorage.setItem('tasks', JSON.stringify(listOfTask.List));
  // }
  // componentWillMount = () => {
  //   let taskJSON = JSON.parse(localStorage.getItem('tasks'));
  //   this.setState({
  //     tasks: listOfTask.List
  //   })
    
  // }
//   changeProgress = (id, progress) => {
//     //console.log(id, progress);
//     let taskJSON = JSON.parse(localStorage.getItem('tasks'));
//     for(let index in taskJSON){
//       if(taskJSON[index].id === id){
//         taskJSON[index].status = progress
//       }
//     }
//     this.setState({
//       tasks: taskJSON
//     })
//     localStorage.setItem('tasks', JSON.stringify(taskJSON)); 
//   }
//   clearbeforeAddNewTask =() => {
//     this.setState({
//       isAddNewTask: true
//     })
//   }
//   // add new task
//   addNewTask = (newtask) => {
//    if(this.state.isAddNewTask){
//      newtask.id = randomid(5);
//     let taskJSON = JSON.parse(localStorage.getItem('tasks'));
//     taskJSON = [...taskJSON, newtask];
//     this.setState({
//       tasks: taskJSON
//     })
//     localStorage.setItem('tasks', JSON.stringify(taskJSON)); 
//    }
//   }
  
//   // edit task
//   editTask =(data) => {
//    this.setState({
//      taskEditting: data,
//      isAddNewTask: false
//    })
    
//   }
//   onEditTask = (data) => {
//     if(!this.state.isAddNewTask){
//       let taskJSON = JSON.parse(localStorage.getItem('tasks'));
//      for(let i in taskJSON){
//        if (taskJSON[i].id === data.id){
//         taskJSON[i].name = data.name;
//         taskJSON[i].description = data.description;
//         taskJSON[i].priority = data.priority;
//         taskJSON[i].memberIdArr = data.memberIdArr;
//         taskJSON[i].labelArr = data.labelArr;
//        }
//      }
//       this.setState({
//         tasks: taskJSON
//       })
//       localStorage.setItem('tasks', JSON.stringify(taskJSON));
//     }
//   }
// // filter progress
//   FilterProgress = (filterProgress) => {
//    // console.log(filterProgress);
//     this.setState({
//       filterType: 'filterProgress',
//       filterProgress: filterProgress
//     })
//   }
// // filter search
// changeFilterSearch = (filtersearch) => {
//   console.log(filtersearch);
//   this.setState({
//     filterType: 'filterSearch',
//     filterSearch: filtersearch
//   })
// }
// changeSortType = (sortType) => {
// this.setState({
//   filterType: "sortType",
//   sortType: sortType
// })
// }
  render() {
   
      //let { taskEditting, isAddNewTask, filterType, filterProgress, filterSearch, sortType} =  this.state;   
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Control 
              // generateData = {this.generateData}
              // clearbeforeAddNewTask = {this.clearbeforeAddNewTask}
              // FilterProgress = {this.FilterProgress}
              // changeSortType = {this.changeSortType}
              />
              {/* DISPLAY */}
             <TaskItems
            //  tasks = {tasks}
             //editTask = {this.editTask}
             //tasks = {listOfTask.List}
            //  changeProgress = {this.changeProgress}
            //  filterProgress={filterProgress}
            //  filterType = {filterType}
            //  changeFilterSearch= {this.changeFilterSearch}
            //  filterSearch = {filterSearch}
            //  sortType = {sortType}
              />
            </div>
          </div>
        </div>
        {/* The Modal */}
      <ModalPopup 
      // addNewTask = {this.addNewTask}
      // taskEditting = {taskEditting}
      // isAddNewTask ={isAddNewTask}
      // onEditTask = {this.onEditTask}
      />
      </div>
    );
  }
 
}

export default App;
