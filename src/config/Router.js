import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import LandingPage from '../components/landing-page';
import Login from "../components/login";
import Home from "../components/home";

const PrivateRoute  = ({ component: Component, isAuth, ...rest }) => (
  <Route {...rest} 
    render={(props) => {
      return isAuth === true ? <Component {...props } /> : <Redirect to="/" />;
    }} 
  /> 
);

class Router extends Component {
  render() {
    const { history, isAuth } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" isAuth={isAuth} component={Home} />
          <Route render={() => <Redirect to="/" />}/>
        </Switch>
      </ConnectedRouter>
    );
  }
};

const mapStateToProps = state => {
  const { isAuth } = state.auth;
  return { isAuth };
};

export default connect(mapStateToProps, null)(Router);