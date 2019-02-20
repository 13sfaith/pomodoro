import React, { Component } from 'react';

import Timer from '../timer/Timer.js';

class BreakTimer extends Component {
  render() {
    return(
      <div>
        <h1>Break Time!</h1>
        <Timer />
      </div>
    );
  }
}
export default BreakTimer;
