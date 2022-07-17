import React, { Component } from 'react';
import './Register.css';

export class Register extends Component {

  buttonHandler = () => {
    var name=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    var confirm_pass=document.getElementById("confirm_password").value;
    if(pass !== confirm_pass)
    {
      alert("Password and Confirm Password do not match");
      return;
    }
    else if(name.length===0 || pass.length===0)
    {
      alert("No empty fields are allowed");
      return;
    }
    else{
     this.props.func2(name,pass);
    }
  }

  buttonHandler2 = () => {
    this.props.func('SendToLogin');
  }
  render() {
    return (
      <div className="Register">
        <form>
        <label>USERNAME </label>
        <input type="text" placeholder="Username" id="username" />
        <label>PASSWORD </label>
        <input type="password" placeholder="Password" id="password" />
        <label>CONFIRM PASSWORD </label>
        <input type="password" placeholder="Confirm Password" id="confirm_password" />
        <button type="button" onClick={this.buttonHandler}>Register</button>
        <span>Already in Exotic Family? <button onClick={this.buttonHandler2}>SignIn</button></span>
        </form>
      </div>
    )
  }
}

export default Register