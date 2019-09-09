import React, { Component } from "react";
import { connect } from "react-redux";
import { initializeTasks } from "../../Actions/index";
import * as Types from "../../Contants/actionsTypes";

class InnitializeTask extends Component {
  //  onClick = () => {
  //    this.props.initializeTasks();
  //  }
  render() {
    console.log(this.props.initializeTasks());
    return (
      <div>
        <button
          type="button"
          className="btn my-1 btn--newTask initializeButton"
          onClick={() => this.props.initializeTasks()}
        >
          <i className="fa fa-pencil-square-o" />
          Set data to localstore
        </button>
      </div>
    );
  }
}
const mapDispatchToDrops = (dispatch) => {
  return {
    initializeTasks: () => {
      console.log(6);
      
      dispatch({
        type: Types.INITIALIZE_TASKS
      });
    }
  };
};
export default connect(
  null,
  mapDispatchToDrops
)(InnitializeTask);
