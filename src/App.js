import React, { Component } from 'react';

import './App.css';

import TaskInput from './components/TaskInput.js';
import TaskList from './components/TaskList.js';
import Timer from './components/timer/Timer.js';

function TaskHeader(props) {
  return <p id="heading">{props.aTask}</p>
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
        <div id="taskContain">
          <TaskHeader aTask={this.state.aTask} />
        </div>
        <Timer />
        <TaskInput setTaskValue={this.setTaskValue} setTask={this.setTask} />
        <TaskList />
      </div>
    );
  }
}

export default App;
