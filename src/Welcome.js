import React, { Component } from 'react';
import './Welcome.css';

export class Welcome extends Component {
    buttonHandler = () => {
        this.props.func('SendToLogin');
      }
  render() {
    return (
      <div className="Welcome">
        <h1>Hi there, {this.props.username} !!</h1>
        <h5>Craving for some moth watering food??</h5>
        <p>Don't worry, we got you covered!!</p>
        <button onClick={this.buttonHandler}>Logout</button> 
      </div>
    )
  }
}

export default Welcome