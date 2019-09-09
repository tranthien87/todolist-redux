import React, { Component } from "react";
import Thead from "./TaskItems/Thead";
import Trow from "./TaskItems/Trow";
import Search from './TaskItems/Search';
import {connect} from 'react-redux';

 class TaskItems extends Component {
  render() {
    
    let { tasks, filterType, filterProgress, filterSearch, sortType} = this.props;
    let filterTask = [];
    switch (filterType) {
      case "filterProgress":
        if (filterProgress === -1) {
          filterTask = tasks;
        } else {
          for (let task of tasks) {
            if (task.status === filterProgress) {
              filterTask = [...filterTask, task];
            }
          }
        }

        break;
    case "filterSearch":
      filterTask = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
      })
          break;
      case 'sortType':
        filterTask = tasks;
        if(sortType === 'asc'){
          filterTask.sort((x, y) => {
            let a = x.name.toLowerCase();
            let b = y.name.toLowerCase();
            if (a < b){return -1}
            if (a > b){ return 1}
            else return 0
          })
        }
        if (sortType === 'desc'){
          filterTask.sort((x, y) => {
            let a = x.name.toLowerCase();
            let b = y.name.toLowerCase();
            if (a > b){return -1}
            if (a < b){ return 1}
            else return 0
          })
        }
        break;
    
      case "filterLabel":
        break;

      case "filterPriority":
        break;

      default:
        filterTask = tasks;
        break;
    }

   // console.log(filterTask);
    let elemTaskItem = tasks.map((task, index) => {
      return (
        <Trow
          task={task}
          //filterProgress = {filterProgress}
          key={index}
          index={index}
          editTask={this.props.editTask}
          changeProgress={this.props.changeProgress}
        ></Trow>
      );
    });
    // edit task

    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <Search 
              changeFilterSearch = {this.props.changeFilterSearch}
              />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <Thead />
            <tbody>{elemTaskItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state) => {
return {
  tasks: state.tasks
}
}
export default connect(mapStateToProps, null)(TaskItems);