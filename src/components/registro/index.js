import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardContent, CardActions } from "material-ui/Card";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Toaster from "../common/Toaster";
import { 
  nombreChanged, 
  apellidoChanged, 
  usernameChanged, 
  passwordChanged,
  doRegistro
} from '../../actions/auth';
 
import Styles from '../login/style';

class Registro extends Component {

  handleInputUsuario = (e) => {
    this.props.usernameChanged(e.target.value);
  }

  handleInputPassword = (e) => {
    this.props.passwordChanged(e.target.value);
  }

  handleInputNombre = (e) => {
    this.props.nombreChanged(e.target.value);
  }

  handleInputApellido = (e) => {
    this.props.apellidoChanged(e.target.value);
  }

  handleRegistroClick = (e) => {
    e.preventDefault();
    const { nombre, apellido, email, password } = this.props;
    this.props.doRegistro({ nombre, apellido, email, password});
  }

  render() {
    const { Container, HeaderStyle, CardBody, CardStyle, FormStyle } = Styles;
    return (
      <section style={Container}>
        <div style={HeaderStyle} />
        <Card style={CardStyle}>
          <CardContent style={CardBody}>
            <form style={FormStyle} onSubmit={this.handleRegistroClick}>
              <TextField value={this.props.email} required onChange={this.handleInputUsuario} label="Email" type="email" />
              <TextField value={this.props.password} required onChange={this.handleInputPassword} label="Password" type="password" />
              <TextField value={this.props.nombre} required onChange={this.handleInputNombre} label="Nombre" type="text" />
              <TextField value={this.props.apellido} required onChange={this.handleInputApellido} label="Apellido" type="text" />
              <Button color="primary" type="submit" style={{ marginTop: 20}}>
                Registrar
              </Button>
            </form>
          </CardContent>
        </Card>
        <Toaster show={this.props.show} message={this.props.message} duration={3000} vertical="bottom" horizontal="left" />
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  const { nombre, apellido, password, email } = state.auth;
  const { message, show } = state.util;
  return { nombre, apellido, password, email, message, show };
}

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  nombreChanged,
  apellidoChanged,
  doRegistro
})(Registro);