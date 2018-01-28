import React, { Component } from 'react';
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

class Login extends Component {

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
                size={120}
              />
              <p>Acceso de usuario</p>
            </div>
            <TextField
              style={{ width: '70%' }}
              floatingLabelText="Usuario o Email"
            />
            <TextField
              style={{ width: '70%' }}
              floatingLabelText="Password"
            />
            <div style={ActionsStyle}>
              <Checkbox
                label="Recordarme"
                style={{}}
              />
              <FlatButton style={{ minWidth: 130 }} label="Registrarse" />
            </div>
            <RaisedButton style={{ minWidth: 180, marginTop: 25 }} label="Login" primary={true} />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Login;