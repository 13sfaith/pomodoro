import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import TaskTimer from './components/taskTimer/TaskTimer.js';
import BreakTimer from'./components/breakTimer/BreakTimer.js';
import Menu from './components/Menu.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route path="/break" component={BreakTimer}/>
          <Route exact path="/" component={TaskTimer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
