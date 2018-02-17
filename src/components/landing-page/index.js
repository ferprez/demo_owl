import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import Header from './components/Header';
import Style from './styles/';
import logo from '../../logo.svg';

class LandingPage extends Component {
  render() {
    const { Container, HeaderStyle } = Style;
    return (
      <div style={{ overflow: 'hidden'}}>
        <Header>
          <h1>Hola Fernando!!</h1>       
         </Header>
       
        <nav className="navbar">
          <div className="logo">
            <img src={logo} width={100} height={100} />
          </div>
          <ul className="links-bar">
            <li className="nav-list-link"><Link to="/skills">Skills</Link></li>
            <li className="nav-list-link"><Link to="/login">Demo</Link></li>
            <li className="nav-list-link"><Link to="/login">Demo</Link></li>
            <li className="nav-list-link"><Link to="/login">Demo</Link></li>
            <li className="nav-list-link"><Link to="/login">Demo</Link></li>
            <li className="nav-list-link"><Link to="/login">Demo</Link></li>
          </ul>
        </nav>
        <section style={{ height: 650, backgroundColor:'#ccc' }}>
          <span>asdfasdfnalhsdfbalsdbfalsdfbasdufibfsius</span>
        </section>  
      </div>
    );
  }
}

export default LandingPage;