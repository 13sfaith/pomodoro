import React, { Component } from 'react';

import './TaskInput.css';

class TaskInput extends Component {

  render() {
    return (
      <div>
        <input id="taskIn" placeholder="Enter Task" onChange={this.props.setTaskValue}></input>
        <button id="taskBu" onClick={this.props.setTask}>+</button>
      </div>
    );
  }
}

export default TaskInput;
