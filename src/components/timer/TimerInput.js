import React, { Component } from 'react';

class TimerInput extends Component {

  render() {
    return(
      <div>
        <button onClick={this.props.startCD}>Start</button>
        <button onClick={this.props.stopCD}>Pause</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}
export default TimerInput;
