import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/runs">Runs</Link></li>
    </ul>
  </header>
)

export default Header;