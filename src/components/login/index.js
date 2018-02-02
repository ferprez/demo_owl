import React, { Component } from "react";
import { connect } from "react-redux";
import Styles from "./style";

import Card, { CardContent } from "material-ui/Card";

import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Checkbox from "material-ui/Checkbox";
import Avatar from "material-ui/Avatar";
import { CircularProgress } from "material-ui/Progress";
import { FormGroup, FormControlLabel } from "material-ui/Form";
import Toaster from "../common/Toaster";

import { usernameChanged, passwordChanged, doLogin } from "../../actions/";

class Login extends Component {
  state = {
    checkedA: false,
    snack: false
  };

  handleInputUsuario = e => {
    this.props.usernameChanged(e.target.value);
  };

  handleInputPassword = e => {
    this.props.passwordChanged(e.target.value);
  };

  handleLoginClick = e => {
    e.preventDefault();
    const { email, password } = this.props;
    this.props.doLogin({ email, password }, this.handleSnackClick);
  };

  renderButton = () => {
    if (this.props.loading) {
      return (
        <CircularProgress
          size={40}
          thickness={5}
          style={{ marginTop: 30, alignSelf: "center" }}
        />
      );
    }
    return (
      <Button type="submit" raised color="primary" style={{ minWidth: 180 }}>
        Login
      </Button>
    );
  };

  render() {
    const {
      Container,
      HeaderStyle,
      LogoStyle,
      FormStyle,
      CardStyle,
      CardBody,
      ActionsStyle
    } = Styles;
    const { loading, show, message } = this.props;
    return <section style={Container}>
        <div style={HeaderStyle} />
        <Card style={CardStyle}>
          <CardContent style={CardBody}>
            <div style={LogoStyle}>
              <Avatar src="https://image.flaticon.com/icons/png/512/306/306473.png" style={{ height: 100, width: 100 }} />
              <p>Acceso de usuario</p>
            </div>
            <form style={FormStyle} onSubmit={this.handleLoginClick}>
              <TextField value={this.props.email} required onChange={this.handleInputUsuario} label="Usuario o Email" type="email" />
              <TextField value={this.props.password} required onChange={this.handleInputPassword} label="Password" type="password" />
              <div style={ActionsStyle}>
                <FormGroup row>
                  <FormControlLabel control={<Checkbox checked={this.state.checkedA} value="checkedA" />} label="Recordarme" />
                </FormGroup>
                <Button style={{ minWidth: "50%" }}>Registrarse</Button>
              </div>
              {this.renderButton()}
            </form>
          </CardContent>
        </Card>
        <Toaster show={show} message={message} duration={3000} vertical="bottom" horizontal="left" />
      </section>;
  }
}

const mapStateToProps = state => {
  const { email, password, loading } = state.auth;
  const { message, show } = state.util;
  return { email, password, loading, message, show };
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  doLogin
})(Login);
