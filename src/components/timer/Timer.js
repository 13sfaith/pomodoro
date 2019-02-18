import React, { Component } from 'react';

import TimerDisp from './TimerDisp.js';
import TimerInput from './TimerInput.js';


class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      time: 25,
      sec: "00",
      rate: 0,
    }

    this.intervalHandle = null;
    this.secondsRemaining = null;
    this.startingSeconds = null;
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick(){
    var min = Math.floor(this.secondsRemaining / 60);
    var secs = this.secondsRemaining - (min * 60);

    this.setState({
      time: min,
      sec: secs,
      rate: this.secondsRemaining/this.startingSeconds,
    });

    if (secs < 10){
      this.setState({
        sec: "0" + this.state.sec
      })
    }

    if(min === 0 & secs === 0){
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;

  }

  startCountDown(){
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.time;
    if (this.secondsRemaining == null){
      this.secondsRemaining = time * 60;
      this.startingSeconds = time * 60;
    }
  }

  stopCountDown(){
    clearInterval(this.intervalHandle);
  }

  reset(){
    this.secondsRemaining = null;
    this.startingSeconds = null;
    this.setState({
      time: 25,
      sec: "00"
    });
  }

  render(){
    return(
      <div className="Timer">
        <TimerDisp rate={this.state.rate} minutes={this.state.time} seconds={this.state.sec}/>
        <TimerInput startCD={this.startCountDown} stopCD={this.stopCountDown}
        reset={this.reset}/>
      </div>
    );
  }
}

export default Timer;
