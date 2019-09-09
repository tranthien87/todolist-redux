import React, { Component } from "react";
import CheckboxGroup from "react-checkbox-group";
var randomid = require("random-id");
export default class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIdArr: [], 
      labelArr: []
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
     
    });
  };
  memberChange = newmember => {
    this.setState({
      memberIdArr: newmember
    });
  };
  labelChange = (newlabel) => {
      this.setState({
        labelArr : newlabel
      })
  }
  onSubmit = event => {
    event.preventDefault();
    this.props.addNewTask(this.state);
    this.props.onEditTask(this.state);
  };
  // AddTask = () => {
  //   this.props.addNewTask(this.newTask);
  // }
  // EditTask =() => {
  //   this.props.onEditTask(this.state)
  // }
  componentWillReceiveProps = (nextprops) => {
    if(nextprops && nextprops.isAddNewTask){
      this.clearForm();
     
    } else if (nextprops && nextprops.taskEditting && !nextprops.isAddNewTask){
      this.setState({
        id: nextprops.taskEditting.id,
        name: nextprops.taskEditting.name,
        description: nextprops.taskEditting.description,
        priority: nextprops.taskEditting.priority,
        memberIdArr: nextprops.taskEditting.memberIdArr, 
        labelArr: nextprops.taskEditting.labelArr
      })
    }
  }
  clearForm = () => {
    this.setState ({
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIdArr: [], 
      labelArr: []
    })
  }
  render() {
    //let {newTask} = this.state;
    //console.log(this.props.isAddNewTask);
    
    return (
      <form onSubmit={this.onSubmit}>
        <div className="modal fade" id="modalTask">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">   
                {this.props.isAddNewTask ?  "Add New Task" :"Update Task"}
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
                    name="description"
                    onChange={this.onChange}
                    value={this.state.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    id="priority"
                    name="priority"
                    onChange={this.onChange}
                    value={this.state.priority}
                  >
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <label >Người thực hiện:</label>
                <br />
                <CheckboxGroup
                  name="memberIdArr"
                  value={this.state.memberIdArr}
                  onChange={this.memberChange}
                >
                  {Checkbox => (
                    <>
                      <label>
                        <Checkbox value="user_1" /> Phó Nghĩa Văn
                      </label>
                      <label>
                        <Checkbox value="user_2" /> Nguyễn Minh Tuấn
                      </label>
                      <label>
                        <Checkbox value="user_4" /> Trung Hiếu
                      </label>
                      <label>
                        <Checkbox value="user_3" /> Minh Khải
                      </label>
                    </>
                  )}
                </CheckboxGroup>
                <br />
                <br />
                <label >Nhãn:</label>
                <br />
                <CheckboxGroup
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelChange}
                >
                  {Checkbox => (
                    <>
                      <label>
                        <Checkbox value="FontEnd" /> Font End
                      </label>
                      <label>
                        <Checkbox value="BackEnd" /> Back End
                      </label>
                      <label>
                        <Checkbox value="API" /> API
                      </label>
                      <label>
                        <Checkbox value="Issue" /> Issue
                      </label>
                    </>
                  )}
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  //data-dismiss="modal"
                  onClick={this.AddTask}
                  
                >
                  {this.props.isAddNewTask ?  "Add New Task" :"Update Task"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
