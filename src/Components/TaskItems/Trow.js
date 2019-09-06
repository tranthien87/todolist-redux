import React, { Component } from "react";

export default class Trow extends Component {
  constructor(props){
    super(props);
    this.state = {
      //changeProgress: ''
      //value : this.props.task.status
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
     value: event.target.value
    }, () => {
      this.props.changeProgress(this.state.value, this.props.task.id);
    })
   
  }
  // label
  getLabel = label => {
    let labelColor;
    switch (label) {
      case "FontEnd":
        return (labelColor = "#389E0D");
      case "BackEnd":
        return (labelColor = "#722ED1");
      case "API":
        return (labelColor = "#13C2C2");
      case "Issue":
        return (labelColor = "#CF1322");
      default:
        labelColor = "";
        break;
    }
    return labelColor;
  };
  // get value
  handleEdit = () => {
    this.props.editTask(this.props.task);
  }
  render() {
    //console.log(this.props.task.status); // huy
    //console.log(this.state.value); // chuahoanthanh
    
    let { task, index } = this.props;
    // label
    let elmLabel = task.labelArr.map((label, index) => {
      return (
        <i
          className="fa fa-circle"
          style={{ color: this.getLabel(label) }}
          key={index}
        />
      );
    });
    // priority
    let elmPriority;
    let colorPriority;
    switch (parseInt(task.priority)) {
      case 1:
        elmPriority = "Hight";
        colorPriority = "text-danger";
        break;
      case 2:
        elmPriority = "Nomal";
        colorPriority = "text-sucess";
        break;
      case 3:
        elmPriority = "Low";
        colorPriority = "text-primary";
        break;
      default:
        elmPriority = "";
        colorPriority = "";
        break;
    }
    // images user
    let elmImageUser = task.memberIdArr.map((item, index) => {
      return <img src={`./img/${item}.jpg`} className="user" key={index} alt=""/>;
    });
    // select box
    let iconStatus;
    switch(task.status){
      case "chuahoanthanh":
       iconStatus = "fa fa-anchor mr-2";
       break;
      case "danghoanthanh":
       iconStatus = "fa fa-spinner mr-2";
       break;
      case "hoanthanh":
       iconStatus = "fa fa-check-square-o mr-2";
       break;
      case "huy":
       iconStatus = "fa fa-trash-o mr-2";
       break;
      default:
        iconStatus ="";
        break;
    }
    
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{task.name}</td>
        <td className="text-center">{elmLabel}</td>
        <td className={`${colorPriority} font-weight-bold text-center`}>
          {elmPriority}
        </td>
        <td className="text-center">{elmImageUser}</td>
        <td className="text-center d-flex ">
          <button type="button" className="btn btn-outline-primary mr-2"
           data-toggle="modal" data-target="#modalTask" 
           onClick={this.handleEdit}
          >
            Sửa
          </button>
          <select value= {task.status} className="form-control" onChange={this.handleChange} >
          <option value="tatca">Chọn progress</option>
            <option value="chuahoanthanh">Chưa tiến hành</option>
            <option value="danghoanthanh">Đang tiến hành</option>
            <option value="hoanthanh">Hoàn thành</option>
            <option value="huy">Hủy bỏ</option>
          </select>
        </td>
        <td className="text-center">
        <i className={`${iconStatus}`} />
        </td>
      </tr>
    );
  }
}
