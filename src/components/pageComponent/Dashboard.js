import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import Header from '../helper/customComponent/Header.jsx';
import Menu from '../helper/customComponent/Menu';
import Bradecums from '../helper/customComponent/Bradecums.jsx';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.sidebarCtrlFunc = this.sidebarCtrlFunc.bind(this);
    this.titleCtrlFunc = this.titleCtrlFunc.bind(this);

    this.state = {
      sidebarCtrl: 'dashboard_Sitebar',
      titleCtrl: 'titleShow',

      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      hours: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),

    }

  }


  sidebarCtrlFunc() {
    this.setState({
      sidebarCtrl: this.state.sidebarCtrl == 'dashboard_Sitebar' ? 'dashboard_Sitebar_Collaps' : 'dashboard_Sitebar',
    })
  }

  titleCtrlFunc() {
    this.setState({
      titleCtrl: this.state.titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow',
    })
  }

  render() {
    return (
      <div>
        <Header
          sidebarCtrlFunc={this.sidebarCtrlFunc}
          titleCtrlFunc={this.titleCtrlFunc} />
        <Menu
          sidebarCtrl={this.state.sidebarCtrl}
          titleCtrl={this.state.titleCtrl} />
        <div className="dashboard_Container">
          <Bradecums componentName={this.props.children.type.name} />
          {this.props.children}
        </div>
        <div className="footer clearfix">
        <p>Current Date &amp; Time:
        <span>{this.state.date} / {this.state.month} / {this.state.year}</span>
        <span> {this.state.hours} / {this.state.min} / {this.state.sec}</span>
        </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
