import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from "react-redux";
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import RaisedButton from "material-ui/RaisedButton";

import Login from './components/login';
import Home from './components/home';
import reducers from './reducers';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const store = createStore(
  reducers,
  {},
  applyMiddleware(ReduxThunk, ReduxLogger)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router>
            <div style={{ flex: 1 }}>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
