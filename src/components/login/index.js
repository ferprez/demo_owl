import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from './style';

import {
  Card,
  CardText
} from 'material-ui/Card';

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Checkbox from "material-ui/Checkbox";
import Avatar from "material-ui/Avatar";

import { usernameChanged, passwordChanged } from "../../actions/";

class Login extends Component {

  handleInputUsuario = e => {
    this.props.usernameChanged(e.target.value);
  }

  handleInputPassword = e => {
    this.props.passwordChanged(e.target.value);
  }

  render() {
    const { Container, HeaderStyle, CardStyle, CardBody, ActionsStyle } = Styles;
    return (
      <div style={Container}>
        <div style={HeaderStyle}></div>
        <Card style={CardStyle}>
          <CardText style={CardBody}>
            <div style={{ marginTop: 15 }}>
              <Avatar
                src="https://image.flaticon.com/icons/png/512/306/306473.png"
                size={100}
              />
              <p>Acceso de usuario</p>
            </div>
            <TextField
              style={{ width: '70%' }}
              value={this.props.email}
              onChange={this.handleInputUsuario}
              floatingLabelText="Usuario o Email"
            />
            <TextField
              style={{ width: '70%' }}
              value={this.props.password}
              onChange={this.handleInputPassword}
              floatingLabelText="Password"
            />
            <div style={ActionsStyle}>
              <Checkbox
                label="Recordarme"
                style={{}}
              />
              <FlatButton style={{ minWidth: 130 }} label="Registrarse" />
            </div>
            <RaisedButton 
              style={{ minWidth: 180, marginTop: 25 }} 
              label="Login" 
              primary={true}
            />
          </CardText>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { email, password } = state.auth;
  return { email, password };
}

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged
})(Login);