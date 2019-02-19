import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import TaskTimer from './components/taskTimer/TaskTimer.js';
import BreakTimer from'./components/breakTimer/BreakTimer.js';
import Menu from './components/Menu.js';


function TaskHeader(props) {
  return <p id="heading">{props.aTask}</p>
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route path="/break" component={BreakTimer}/>
          <Route path="/task" component={TaskTimer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
