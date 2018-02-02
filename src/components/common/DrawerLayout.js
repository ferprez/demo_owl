import React, { Component } from 'react';

import Avatar from "material-ui/Avatar";

class DrawerLayout extends Component {
  state = {  }
  render() {
    return (
      <div style={Style.DrawerLayoutStyle}>
        <div style={Style.DrawerHeader}>
          <Avatar
            src="https://image.flaticon.com/icons/png/512/306/306473.png"
            size={200}
          />
        </div>
        {/* <MenuItem>Menu Item</MenuItem>
          <Divider />
          <MenuItem>Menu Item 2</MenuItem>
          <Divider /> */}
      </div>
    );
  }
};

const Style = {
  DrawerLayoutStyle: {
    height: "inherit"
  },
  DrawerHeader: {
    height: "30%",
    display: 'inherit',
    alignItems: 'center'
  }
};

export default DrawerLayout;