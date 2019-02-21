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
    this.removeTask = this.removeTask.bind(this);
    this.getTaskValue = this.getTaskValue.bind(this);
    this.endSig = this.endSig.bind(this);
  }

  setTask(s){
    this.setState( prevState => ({
      aTask: s,
      taskList: [s, ...prevState.taskList]
    }));
  }

  removeTask(i){
    var tempList = this.state.taskList.filter(function(value, index){
      return index !== parseInt(i);
    });
    console.log(tempList);
    this.setState( state => ({
      taskList: tempList,
    }));
    if (this.state.taskList.length === 1){
      this.setState( () => ({
        aTask: "Please enter new task",
      }));
    }
  }

  getTaskValue(e){
    this.setState( state => ({
      aTask: state.taskList[e],
    }));
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
        <TaskList removeTask={this.removeTask} getTaskValue={this.getTaskValue} taskList={this.state.taskList} />
      </div>
    );
  }
}

export default TaskTimer;
