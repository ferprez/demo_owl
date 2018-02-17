import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "material-ui/styles";
import green from "material-ui/colors/green";
import indigo from "material-ui/colors/indigo";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { ParallaxProvider } from "react-scroll-parallax";

import reducers from "./reducers";
import Router from "./config/Router";

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
      main: indigo[500],
      dark: indigo[600],
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
        <ParallaxProvider>
          <MuiThemeProvider theme={theme}>
            <Router history={history} />
          </MuiThemeProvider>
        </ParallaxProvider>
      </Provider>
    );
  }
}

export default App;
