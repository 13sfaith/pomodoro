import React, { Component } from 'react';

import './TaskInput.css';

class TaskInput extends Component {

  constructor(props){
    super(props);

    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    if (e.key === 'Enter'){
      this.props.setTask(e.target.value);
      e.target.value = "";
    }

  }

  render() {
    return (
      <div>
        <input id="taskIn" placeholder="Enter Task" onKeyPress={this.handleKey}></input>
      </div>
    );
  }
}

export default TaskInput;

// Button taken out for now dont know if I want it yet
// <button id="taskBu" onClick={this.props.setTask}>+</button>
