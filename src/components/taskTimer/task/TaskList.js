import React, { Component } from 'react';

import './TaskList.css';

class TaskList extends Component {

  

  render() {
    return(
      <div className="TaskList">
        {this.props.taskList.map((task, id) => {
          if (id % 2 === 0){
            return <div key={id} key-get={id} className="list" onClick={this.props.getTaskValue}>{task}</div>
          } else {
            return <div key={id} key-get={id} className="offset list" onClick={this.props.getTaskValue}>{task}</div>
          }
        })}
      </div>
    );
  }
}

export default TaskList;
