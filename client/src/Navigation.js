import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from './actions/index';

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {

    const mainNav = (
      <ul>

        <li><Link to="/home">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    )

    const userNav = (
      <ul>

        <li><Link to="/home">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/runs">Runs</Link></li>
        <li><Link to="/user_profile">Profile</Link></li>
        <li onClick={(e) => this.handleLogout(e)}>Log Out</li>
      </ul>
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
