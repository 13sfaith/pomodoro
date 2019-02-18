import React, { Component } from 'react';

import TaskInput from './TaskList.js';

class Task extends Component {

  render(){
    return(
      <div>
        <p>yuh</p>
        <TaskInput setTaskValue={this.props.setTaskValue} setTask={this.props.setTask} />
      </div>
    );
  }
}
export default Task;
