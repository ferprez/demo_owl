import React, { Component } from 'react';

import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

class Home extends Component {
  
  state = {open: false};
  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar
          title="Demo"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Home;