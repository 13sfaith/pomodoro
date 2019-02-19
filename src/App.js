import React, { Component } from 'react';

import './App.css';

import TaskTimer from './components/taskTimer/TaskTimer.js';
import Menu from './components/Menu.js';


function TaskHeader(props) {
  return <p id="heading">{props.aTask}</p>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <TaskTimer />
      </div>
    );
  }
}

export default App;
