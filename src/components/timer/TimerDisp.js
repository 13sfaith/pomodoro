//Timer Display Class
//I need to finish this note!

import React, { Component } from 'react';

import './TimerDisp.css';

var ProgressBar = require('progressbar.js');

class TimerDisp extends Component {

  constructor(props){
    super(props);

    this.progressBar = null;
  }

  componentDidMount() {
    this.progressBar = new ProgressBar.SemiCircle('#graph');

    this.progressBar.animate(1);

    this.progressBar.setText(this.props.minutes + ":" + this.props.seconds);
  }

  componentDidUpdate(){
    if (this.props.rate != null){
      this.progressBar.animate(this.props.rate);
    }

    this.progressBar.setText(this.props.minutes + ":" + this.props.seconds);
  }

  render() {


    return(
      <div className="TimerDisp">
        <div onClick={this.props.toggleModal} id="graph">
        </div>
      </div>
    );
  }
}

export default TimerDisp;
