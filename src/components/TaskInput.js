import React, { Component } from 'react';

class TaskInput extends Component {
  render() {
    return (
      <input></input>
      <button onClick={this.props.setTask}>test</button>
    );
  }
}

export default TaskInput;
