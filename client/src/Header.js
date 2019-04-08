import React from 'react';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Header = () => (
  <header>
    <div className="feature">
      <Row className="justify-content-md-center">
        <Col xs lg="1">
          <span><NavLink exact to="/">Home</NavLink></span>
        </Col>
        <Col xs lg="1">
          <span><NavLink to="/events">Events</NavLink></span>
        </Col>
        <Col xs lg="1">
          <span><NavLink to="/runs">Runs</NavLink></span>
        </Col>
      </Row>
    </div>
  </header>
)

export default Header;
