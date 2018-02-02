import React, { Component } from "react";

import { connect } from "react-redux";

import AppBar from "material-ui/AppBar";
import Toolbar from 'material-ui/Toolbar';
import Drawer from "material-ui/Drawer";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";
import Switch from "material-ui/Switch";
import Menu, { MenuItem } from "material-ui/Menu";


import { tokenExpired, closeDrawer, openDrawer } from "../../actions";

import DrawerLayout from './DrawerLayout';

class Layout extends Component {
  state = { open: false, auth: false };
  handleToggle = () => this.setState({ open: !this.state.open });

  componentWillMount() {
    if (this.props.token === null) {
      // this.props.tokenExpired();
    }
  }

  render() {
    return (
      <div style={Style.Container}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.props.openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              Title
            </Typography>
            {this.state.auth && (
              <div>
                <IconButton
                  aria-owns={this.state.open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <div style={Style.DashboardContent}>
          { this.props.children }
        </div>
        <Drawer open={this.props.drawer} onClose={this.props.closeDrawer}>
            <div onClick={this.props.closeDrawer} onKeyDown={this.props.closeDrawer}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
            </div>
        </Drawer>
      </div>
    );
  }
};

const Style = {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  DashboardContent: {
    height: 'inherit',
    display: 'inherit',
    justifyContent: 'center',
    paddingTop: 20
  }
};

const mapStateToProps = state => {
  const { token, logged } = state.auth;
  const { drawer } = state.util;
  return { token, logged, drawer };
};

export default connect(mapStateToProps, {
  tokenExpired,
  closeDrawer,
  openDrawer
})(Layout);
