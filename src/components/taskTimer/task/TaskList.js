import React, { Component } from 'react';

import './TaskList.css';

class TaskList extends Component {
  constructor(props){
    super(props);

    this.state = {
      isShowing: -1,
    }

    this.setTask = this.setTask.bind(this);
    this.setDelete = this.setDelete.bind(this);
    this.editTask = this.editTask.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  setTask(event) {
    this.props.getTaskValue(event.target.getAttribute('key-get'));
  }

  setDelete(event){
    this.props.removeTask(event.target.getAttribute('id-get'));
  }

  editTask(event){
    let id = event.target.getAttribute('id-get');
    this.setState( () => ({
      isShowing: parseInt(id),
    }));
  }

  handleKey(e) {
    if (e.key === 'Enter'){
      this.props.editTask(e.target.getAttribute('id-get'), e.target.value);

      this.setState( () => ({
        isShowing: -1,
      }));
    }

  }


  render() {
    return(
      <div className="TaskList">
        {this.props.taskList.map((task, id) => {

          return (<div key={task} key-get={id} className="flexin list">
              <div className="task" key-get={id} onClick={this.setTask} >
                {this.state.isShowing !== id && task}
                {this.state.isShowing === id &&
                  <input defaultValue={task}id-get={id} onKeyPress={this.handleKey} className="taskIn" autofocus="true"/>}
              </div>
              <div className="option" id-get={id} onClick={this.editTask}>edit</div>
              <div className="option" id-get={id} onClick={this.setDelete}>complete</div>
              <div className="option" id-get={id} onClick={this.setDelete}>x</div>

            </div>);

        })}
      </div>
    );
  }
}

export default TaskList;
