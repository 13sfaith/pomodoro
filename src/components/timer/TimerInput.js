//Timer Input class
//Purpose: reads user input to start/stop/reset Timer
//mainly a ui component

import React, { Component } from 'react';

import './TimerInput.css';

class TimerInput extends Component {

  render() {
    return(
      <div>
        <button className="tIn" onClick={this.props.startStop}>{this.props.current}</button>
        <button className="tIn" onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}
export default TimerInput;
