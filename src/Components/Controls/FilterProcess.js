import React, { Component } from "react";

export default class FilterProcess extends Component {
  handleFilterProgress = (filterprogress) => {
    this.props.FilterProgress(filterprogress)
  }
  render() {
    
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left">
          Lọc
          <li className="py-1 display-5 lead" onClick = {this.handleFilterProgress.bind(this, -1)}>
            Tất cả
          </li>
          <li className="py-1 display-5 lead"  onClick = {this.handleFilterProgress.bind(this, 'chuahoanthanh')}>
          <i className="fa fa-anchor mr-2"></i>
            Chưa tiến hành
          </li>
          <li className="py-1 display-5 lead" onClick = {this.handleFilterProgress.bind(this, 'danghoanthanh')}>
          <i class="fa fa-spinner mr-2" ></i>
            Đang tiến hành
          </li>
          <li className="py-1 display-5 lead" onClick = {this.handleFilterProgress.bind(this, 'hoanthanh')}>
            <i className="fa fa-check-square-o mr-2" />
            Hoàn thành
          </li>
          <li className="py-1 display-5 lead" onClick = {this.handleFilterProgress.bind(this, 'huy')}>
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
          </li>
        </ul>
      </div>
    );
  }
}
