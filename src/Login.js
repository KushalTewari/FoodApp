import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {

  buttonHandler = () => {
    var name=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(name.length===0 || pass.length===0)
    {
      alert("Username and Password cannot be empty");
      return;
    }
    else{
      if(name === this.props.username && pass === this.props.password)
      {
        this.props.func('Login');
      }
      else{
        alert("Invalid Credentials");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        return;
      }
    }

  }
  buttonHandler2 = () => {
    this.props.func('SendToRegister');
  }

  render() {
    return (
      <div className="Login">
        <form>
          <label>USERNAME </label>
          <input type="text" placeholder="Username" id="username" />
          <label>PASSWORD </label>
          <input type="password" placeholder="Password" id="password" />
          <button type="button" onClick={this.buttonHandler}>Sign In</button>
          <span>New to Exotic family? <button onClick={this.buttonHandler2}>Register</button></span>
        </form>
      </div>
    )
  }
}

export default Login