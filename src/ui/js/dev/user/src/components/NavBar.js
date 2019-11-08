/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import {
  Row,
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebook, FaWhatsapp, FaYoutube,
} from 'react-icons/fa';

import jwt from 'jsonwebtoken';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTogglerOpen: false,
    };
  }

  componentDidMount() {
    const gottenTokenInfo = jwt.decode(window.localStorage.getItem('authentication'));
    this.setState({ gottenTokenInfo });
  }

  handleToggler = () => {
    const { isTogglerOpen } = this.state;
    this.setState({ isTogglerOpen: !isTogglerOpen });
  };

  handleSettingsClicked = (event) => {
    event.preventDefault();
  };

  handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.removeItem('authentication');
    window.location.replace('/');
  }

  render() {
    const { isTogglerOpen } = this.state;
    const { gottenTokenInfo } = this.state;
    let userAuthorities;
    let userFname;
    if (gottenTokenInfo) {
      userAuthorities = gottenTokenInfo.user_authorities;
      userFname = gottenTokenInfo.fname;
    }
    const SUPERUSER_NAV_ITEMS = (
      <nav>
        <ul className="nav-ul">
          <li><NavLink to="/members">Applications</NavLink></li>
          <li><NavLink to="#">Members</NavLink></li>
          <li><NavLink to="#">Articles</NavLink></li>
          <li><a href="https://twitter.com/teenage_care"><FaTwitter /></a></li>
          <li><a href="https://web.facebook.com/?_rdc=1&_rdr"><FaFacebook /></a></li>
          <li><a href="https://chat.whatsapp.com/GjkSZen3dko0xJL1zmijZs"><FaWhatsapp /></a></li>
          <li><a href="https://www.youtube.com/channel/UCtMLBPdODaglq7MzflAWmvQ"><FaYoutube /></a></li>
        </ul>
      </nav>
    );
    return (
      <div>
        <Navbar dark expand="md" className="bg-custom sticky-element">
          <NavbarBrand href="/">TPPCI</NavbarBrand>
          <NavbarToggler onClick={this.handleToggler} />
          <Collapse
            isOpen={isTogglerOpen}
            navbar
            className="text-white"
          >
            <Nav className="form-inline ml-auto" navbar>
              <Row>
                <div className="col-md-12 text-center">
                  {userAuthorities === 'SUPERUSER' ? SUPERUSER_NAV_ITEMS : ''}
                  <NavLink to="#">{userFname}</NavLink>
                  <button
                    className="btn btn-sm btn-outline-danger rounded-corners"
                    type="button"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </Row>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
