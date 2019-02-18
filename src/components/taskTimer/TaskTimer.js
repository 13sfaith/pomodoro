import React, { Component } from 'react';

// import './App.css';

import TaskInput from './task/TaskInput.js';
import TaskList from './task/TaskList.js';
import Task from './task/Task.js';
import Timer from './timer/Timer.js';

function TaskHeader(props) {
  return <p id="heading">{props.aTask}</p>
}

class TaskTimer extends Component {
  constructor(props){
    super(props);
    this.state = {
      aTask: "Finish the UI",
      inTask: "",
      taskList: [],
    }

    this.setTask = this.setTask.bind(this);
    this.setTaskValue = this.setTaskValue.bind(this);
    this.getTaskValue = this.getTaskValue.bind(this);
  }

  setTask(){
    this.setState( prevState => ({
      aTask: this.state.inTask,
      taskList: [this.state.inTask, ...prevState.taskList]
    }));

    console.log(this.state.taskList);
  }

  setTaskValue(event){
    this.setState({
      inTask: event.target.value,
    });
  }

  getTaskValue(event){

    this.setState({
      aTask: this.state.taskList[event.target.getAttribute('key-get')],
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
        <TaskList getTaskValue={this.getTaskValue} taskList={this.state.taskList} />
      </div>
    );
  }
}

export default TaskTimer;
