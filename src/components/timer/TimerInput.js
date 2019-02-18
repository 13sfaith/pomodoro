import React, { Component } from 'react';

import './TimerInput.css';

class TimerInput extends Component {

  render() {
    return(
      <div>
        <button className="tIn" onClick={this.props.startCD}>Start</button>
        <button className="tIn" onClick={this.props.stopCD}>Pause</button>
        <button className="tIn" onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}
export default TimerInput;
