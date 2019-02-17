import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput.js';

function Task(props) {
  return <h1>{props.aTask}</h1>
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      aTask: "Finish the UI",
    }

    this.setTask = this.setTask.bind(this);
  }

  setTask(){
    this.setState({
      aTask: 'fuck you'
    });
  }

  render() {
    return (
      <div className="App">
        <Task aTask={this.state.aTask} />
        <TaskInput setTask={this.setTask} />
      </div>
    );
  }
}

export default App;
