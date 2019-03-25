import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/events">Events</NavLink></li>
      <li><NavLink to="/runs">Runs</NavLink></li>
    </ul>
  </header>
)

export default Header;
