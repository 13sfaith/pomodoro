import React, { Component } from 'react';

import TimerDisp from './TimerDisp.js';

class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      minutes: 25,
      seconds: 0
    }
  }

  render(){
    return(
      <div>
        <TimerDisp minutes={this.state.minutes} seconds={this.state.seconds}/>
      </div>
    );
  }
}

export default Timer;
