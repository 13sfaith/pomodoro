import React, { Component } from 'react';

import './App.css';

import TaskInput from './components/TaskInput.js';
import Timer from './components/timer/Timer.js';

function Task(props) {
  return <h1>{props.aTask}</h1>
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      aTask: "Finish the UI",
      inTask: "",
    }

    this.setTask = this.setTask.bind(this);
    this.setTaskValue = this.setTaskValue.bind(this);
  }

  setTask(){
    this.setState({
      aTask: this.state.inTask
    });
  }

  setTaskValue(event){
    this.setState({
      inTask: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Task aTask={this.state.aTask} />
        <Timer />
        <TaskInput setTaskValue={this.setTaskValue} setTask={this.setTask} />
      </div>
    );
  }
}

export default App;
