import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tokenExpired } from "../../actions";
import Layout from '../common/Layout';
import Style from './style';

class Home extends Component {
  
  state = {};

  render() {
    return (
      <Layout>
        <p>asdfasdfasdfasdf</p>
      </Layout>
    );
  }
};

const mapStateToProps = state => {
  const { token, isAuth } = state.auth;
  return { token, isAuth };
}

export default connect(mapStateToProps, {
  tokenExpired
})(Home);