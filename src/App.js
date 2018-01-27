import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import RaisedButton from "material-ui/RaisedButton";
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <p>hola fernando!</p>
        <RaisedButton label="Default" />
      </MuiThemeProvider>
    );
  }
}

export default App;
