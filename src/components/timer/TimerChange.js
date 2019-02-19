import React, { Component } from 'react';
import './TimerChange.css';

class TimerChange extends Component {
  render() {
    return (
      <div onClick={this.props.toggleModal} className="TimerChange">
        <div className="Modal">
          <p></p>
        </div>
      </div>
    )
  }
}
export default TimerChange;
