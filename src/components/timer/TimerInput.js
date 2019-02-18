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
