import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {

    }
  }

  check() {
    var username = $('#username').val();
    var password = $('#password').val();

    if (username == "admin" && password == "admin") {
      browserHistory.push('/Overview');
    }
    else {
      alert("wrong Username or Password")
    }
    //browserHistory.push('/Page1');
  }

  handleKeyPress(event) {
    if (event.key == "Enter") {
      this.check();
    }
  }


  render() {

    return (
      <div className="login_Box">
        <h1>Welcome to Login React Application</h1>
        <div>
          <input className="login_Box_Input" type="text" id="username" name="userid" placeholder="USERNAME" required="" onKeyPress={this.handleKeyPress} />
          <input className="login_Box_Input" type="password" id="password" name="password" placeholder="PASSWORD" required="" onKeyPress={this.handleKeyPress} />
          <button className="login_Box_Button" onClick={this.check.bind(this)}>LOGIN</button>
        </div>
      </div>
    );
  }
}

export default Login;




