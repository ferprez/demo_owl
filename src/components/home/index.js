import React, { Component } from 'react';

import AppBar from "material-ui/AppBar";

class Home extends Component {
  state = {  }
  render() {
    return (
      <div>
        <AppBar
          title="Demo"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

export default Home;