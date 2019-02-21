import React, { Component } from 'react';

// import './App.css';

import TaskInput from './task/TaskInput.js';
import TaskList from './task/TaskList.js';
import Timer from '../timer/Timer.js';

function TaskHeader(props) {
  return <p id="heading">{props.aTask}</p>
}

class TaskTimer extends Component {
  constructor(props){
    super(props);
    this.state = {
      aTask: "Finish the UI",
      taskList: [],
    }

    this.setTask = this.setTask.bind(this);
    this.getTaskValue = this.getTaskValue.bind(this);
    this.endSig = this.endSig.bind(this);
  }

  setTask(s){
    this.setState( prevState => ({
      aTask: s,
      taskList: [s, ...prevState.taskList]
    }));
  }

  getTaskValue(event){
    this.setState({
      aTask: this.state.taskList[event.target.getAttribute('key-get')],
    });
  }

  endSig() {
    console.log('Timer finished');
  }

  render() {
    return (
      <div className="App">
        <div id="taskContain">
          <TaskHeader aTask={this.state.aTask} />
        </div>
        <Timer endSig={this.endSig}/>
        <TaskInput setTask={this.setTask} />
        <TaskList getTaskValue={this.getTaskValue} taskList={this.state.taskList} />
      </div>
    );
  }
}

export default TaskTimer;
