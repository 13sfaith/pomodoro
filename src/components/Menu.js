import React, { Component } from 'react';

import MenuContainer from './Menu/MenuContainer.js';
import MenuToggle from './Menu/MenuToggle.js';

import './Menu.css';

class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      isVisible : false,
    }

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible(){
    this.setState({
      isVisible : !this.state.isVisible,
    })
  }

  render(){
    return(
      <div className="Menu">
        <MenuToggle isVisible={this.isVisible} toggle={this.toggleVisible} />
        {this.state.isVisible && <MenuContainer toggle={this.toggleVisible} />}
      </div>
    );
  }
}
export default Menu;
