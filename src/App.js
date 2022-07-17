import React, { Component } from 'react';
import './App.css';
import Home from './Home';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
    }
  }
  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    )
  }
}

export default App