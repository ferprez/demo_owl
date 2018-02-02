import React, { Component } from 'react';
import { connect } from 'react-redux';

import Snackbar from "material-ui/Snackbar";
import { clearToast } from "../../actions/index";

const defaultPosition = { vertical: "bottom", horizontal: "left" };

class Toaster extends Component {

  render() {
    const { show, clearToast, message, duration, vertical, horizontal } = this.props;
    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={show}
        autoHideDuration={duration || 5000}
        onClose={clearToast}
        message={message}
      />
    );
  }
};

export default connect(null, {
  clearToast
})(Toaster);