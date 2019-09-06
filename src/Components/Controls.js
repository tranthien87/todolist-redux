import React, { Component } from 'react'
import AddNewTask from './Controls/AddNewTask';
import InnitializeTask from './Controls/InnitializeTask';
import FilterProcess from './Controls/FilterProcess';
import FilterLabel from './Controls/FilterLabel';
import FilterPriority from './Controls/FilterPriority';
import Sort from './Controls/Sort';


export default class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
            <div className="header header--left d-flex align-items-center">
              <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
              <h3 className="text-white d-inline font-weight-light ml-2">
                Lê Quang Song
              </h3>
            </div>
            {/* Add new task  */}
            <InnitializeTask 
            generateData = {this.props.generateData}
            />
           <AddNewTask 
           clearbeforeAddNewTask ={this.props.clearbeforeAddNewTask}
           />
            {/* Filter */}
            <div className="px-3">
                {/* filter process */}
             <FilterProcess 
             FilterProgress = {this.props.FilterProgress}
              />
                {/* filter label */}
                <FilterLabel />
                {/* filter priority */}
              <FilterPriority />
             {/* Sort  */}
             <Sort 
             changeSortType = {this.props.changeSortType}
             />
            </div>
          </div>
        )
    }
}
