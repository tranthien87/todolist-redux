import React, { Component } from 'react'

export default class InnitializeTask extends Component {
  getDataFromLocalSt = () => 
    this.props.generateData();
  
    render() {
        return (
            <div>
                <button
              type="button"
              className="btn my-1 btn--newTask initializeButton"
              onClick={this.getDataFromLocalSt}
            >
              <i className="fa fa-pencil-square-o" />
              Lấy dữ liệu từ localstore
            </button> 
            </div>
        )
    }
}
