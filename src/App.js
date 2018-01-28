import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import RaisedButton from "material-ui/RaisedButton";

import Login from './components/login';
import Home from './components/home';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div style={{ flex: 1 }}>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
