//Class Timer
//Purpose: manages Time and Timer components

import React, { Component } from 'react';

import TimerDisp from './TimerDisp.js';
import TimerInput from './TimerInput.js';
import TimerChange from './TimerChange.js';

import './Timer.css';

class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      oTime: 25,
      time: 25,
      sec: "00",
      rate: 1,
      isRunning: false,
      isShowing: false,
      current: "Start"
    }

    this.intervalHandle = null;
    this.secondsRemaining = null;
    this.startingSeconds = null;
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.startStopToggle = this.startStopToggle.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  //Method takes total seconds (computed at startCountDown())
  //and every second ticks down and updates the time states
  tick(){

    this.secondsRemaining--;

    //turns total seconds into seconds and minutes
    var min = Math.floor(this.secondsRemaining / 60);
    var secs = this.secondsRemaining - (min * 60);

    this.setState({
      time: min,
      sec: secs,
      rate: this.secondsRemaining/this.startingSeconds,
    });

    //adds leading zero (cosmetic)
    if (secs < 10){
      this.setState({
        sec: "0" + this.state.sec
      })
    }

    //end case
    if(min === 0 & secs === 0){
      clearInterval(this.intervalHandle);
      this.sendEndSig();
    }
  }

  //will call the parent manager if it wants to know
  sendEndSig() {
    if (this.props.endSig != null){
      this.props.endSig();
    }
  }

  //countdown control methods
  //called by TimerInput component
  startCountDown(){
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.oTime;
    if (this.secondsRemaining == null){
      this.secondsRemaining = time * 60;
      this.startingSeconds = time * 60;
    }
    this.tick();
  }

  stopCountDown(){
    clearInterval(this.intervalHandle);
  }

  //Switchs run state and corrects button text
  startStopToggle(){
    if (this.state.isRunning){
      this.stopCountDown();
      this.setState({
        current: "Start"
      });
    } else {
      this.startCountDown();
      this.setState({
        current: "Stop"
      });
    }

    this.setState({
      isRunning: !this.state.isRunning
    });
  }

  reset(){
    clearInterval(this.intervalHandle);
    this.secondsRemaining = null;
    this.startingSeconds = null;
    this.setState({
      time: this.state.oTime,
      sec: "00",
      rate: 1,
      isRunning: false,
      current: "Start"
    });
  }

  //Time Change functions
  //Called by TimerChange component
  toggleModal() {
    if(!this.state.isRunning){
      this.setState({
        isShowing: !this.state.isShowing,
      });
    }
  }

  getTime(event){
    this.setState({
      oTime: (event.target.id * 5),
      time: (event.target.id * 5),
      //added to reset sec on display
      sec: "00",
    });
    this.secondsRemaining = null;
    this.toggleModal();
  }


  render(){



    return(
      <div className="Timer">
        {this.state.isShowing && <TimerChange time={this.state.time} getTime={this.getTime} toggleModal={this.toggleModal}/>}
        {!this.state.isShowing &&
          <TimerDisp toggleModal={this.toggleModal} rate={this.state.rate} minutes={this.state.time} seconds={this.state.sec}/>}
        <TimerInput current={this.state.current} startStop={this.startStopToggle}
         reset={this.reset}/>
      </div>
    );
  }
}

export default Timer;
