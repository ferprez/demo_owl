import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "material-ui/styles";
import green from "material-ui/colors/green";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import Router from './config/Router';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  {},
  applyMiddleware(middleware, ReduxThunk, ReduxLogger)
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: green[500],
      dark: green[600],
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router history={history} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
