import React, { Component } from 'react';
import './TimerChange.css';

class TimerChange extends Component {

  testTime = (event) => {
    console.log(event.target.id);
  }

  createList = () => {
    let times = [];
    for (var i = 1; i <= 5; i++){

      if(i * 5 === this.props.time){
        times.push(<div onClick={this.props.getTime} id={i} className="Options" key={i}>{i * 5} Min</div>);
      } else {
        times.push(<div onClick={this.props.getTime} className="Options" id={i} key={i}>{i * 5} Min</div>);
      }

    }

    return times;
  };

  render() {
    // var list = this.times.map( (time) => {
    //   (<option value={time}>{time} min</option>);
    // });

    return (
      <div className="TimerChange">
        <div className="Background"></div>
        <div className="Modal">
          {this.createList()}
        </div>
      </div>
    );
  }
}
export default TimerChange;

// <option value="5">5 min</option>
// <option value="25">25 min</option>

// <input onChange={this.props.getTime}></input>
