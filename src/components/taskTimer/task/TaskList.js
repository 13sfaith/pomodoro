import React, { Component } from 'react';

import './TaskList.css';

class TaskList extends Component {
  constructor(props){
    super(props);

    this.setTask = this.setTask.bind(this);
    this.setDelete = this.setDelete.bind(this);
  }

  setTask(event) {
    this.props.getTaskValue(event.target.getAttribute('key-get'));
  }

  setDelete(event){
    this.props.removeTask(event.target.getAttribute('id-get'));
  }


  render() {
    return(
      <div className="TaskList">
        {this.props.taskList.map((task, id) => {

          return (<div key={task} key-get={id} className="flexin list">
              <div className="task" key-get={id} onClick={this.setTask} >{task}</div>
              <div className="option">edit</div>
              <div className="option">complete</div>
              <div className="option" id-get={id} onClick={this.setDelete}>x</div>

            </div>);

        })}
      </div>
    );
  }
}

export default TaskList;
