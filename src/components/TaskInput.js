import React, { Component } from 'react';

import './TaskInput.css';

class TaskInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      value : "",
    }

    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    if (e.key === 'Enter'){
      this.props.setTask();
      this.setState({
        value: ""
      });
    }
  }

  render() {
    return (
      <div>
        <input id="taskIn" placeholder="Enter Task" onChange={this.props.setTaskValue} onKeyPress={this.handleKey}></input>
        <button id="taskBu" onClick={this.props.setTask}>+</button>
      </div>
    );
  }
}

export default TaskInput;
