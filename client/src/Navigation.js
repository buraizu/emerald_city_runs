import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from './actions/index';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {

    const mainNav = (
      <Row className="justify-content-center">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <ul className="nav">
            <li className="navLink text-center"><Link to="/">Home</Link></li>
            <li className="navLink text-center"><Link to="/login">Log In</Link></li>
            <li className="navLink text-center"><Link to="/signup">Sign Up</Link></li>
          </ul>
        </Col>
      </Row>
    )

    const userNav = (
      <Row className="justify-content-center">
        <Col md={{ span: 6, offset: 3 }}>
          <ul className="nav">
            <li className="navLink"><Link to="/events">Events</Link></li>
            <li className="navLink"><Link to="/runs">Runs</Link></li>
            <li className="navLink"><Link to="/user_profile">Profile</Link></li>
            <li className="navLink"><Link to="/trophies">Trophies</Link></li>
            <li className="navLink" onClick={(e) => this.handleLogout(e)}>Log Out</li>
          </ul>
        </Col>
      </Row>
    );

    return (
      <header>
        <nav>
          {this.props.isAuthenticated ? userNav : mainNav}
        </nav>
      </header>
    )
  }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));
