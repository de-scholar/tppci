/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

import {
  FaTwitter, FaFacebook, FaWhatsapp, FaYoutube,
} from 'react-icons/fa';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTogglerOpen: false,
    };
  }

  handleToggler = () => {
    const { isTogglerOpen } = this.state;
    this.setState({ isTogglerOpen: !isTogglerOpen });
  }

  render() {
    const { isTogglerOpen } = this.state;

    return (
      <div>
        <Navbar dark expand="md" className="bg-custom sticky-element width-98">
          <NavbarBrand href="/">TPPCI</NavbarBrand>
          <NavbarToggler onClick={this.handleToggler} />
          <Collapse
            isOpen={isTogglerOpen}
            navbar
            className="text-white"
          >
            <Nav className="form-inline ml-auto" navbar>
              <nav>
                <ul className="nav-ul">
                  <li><a href="/join-us">Membership</a></li>
                  <li><a href="https://twitter.com/teenage_care"><FaTwitter /></a></li>
                  <li><a href="https://web.facebook.com/?_rdc=1&_rdr"><FaFacebook /></a></li>
                  <li><a href="https://chat.whatsapp.com/GjkSZen3dko0xJL1zmijZs"><FaWhatsapp /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCtMLBPdODaglq7MzflAWmvQ"><FaYoutube /></a></li>
                </ul>
              </nav>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
