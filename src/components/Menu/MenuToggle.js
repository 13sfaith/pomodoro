import React, { Component } from 'react';


class MenuToggle extends Component {
  render(){
    return (
      <div className="MenuToggle">
        <div id="contain" onClick={this.props.toggle}>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
        </div>
      </div>
    );
  }
}
export default MenuToggle;
