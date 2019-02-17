import React, { Component } from 'react';

class TimerDisp extends Component {

  render() {
    

    return(
      <div>
        <p>{this.props.minutes}:{this.props.seconds}</p>
      </div>
    );
  }
}

export default TimerDisp;
