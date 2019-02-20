import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuContainer extends Component {

  render() {
    return(
      <div className="MenuContainer">
        <div className="Spacer"></div>
        <Link className="Li" to="/">
          <div onClick={this.props.toggle} className="Link">Pomodelo</div>
        </Link>
        <Link className="Li" to="/break">
          <div onClick={this.props.toggle} className="Link">Break</div>
        </Link>
      </div>
    );
  }
}
export default MenuContainer;
