import React, { Component } from 'react';

class TaskInput extends Component {

  render() {
    return (
      <div>
        <input onChange={this.props.setTaskValue}></input>
        <button onClick={this.props.setTask}>+</button>
      </div>
    );
  }
}

export default TaskInput;
