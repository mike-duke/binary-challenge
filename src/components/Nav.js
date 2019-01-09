import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {

  render() {
    return (
      <nav>
        <NavLink to="/relevant" className="navlink">
          Relevant Articles
        </NavLink>
        <NavLink to="/current" className="navlink">
          Current Events
        </NavLink>
        <NavLink to="/about" className="navlink">
          What is Torcano?
        </NavLink>
      </nav>
    );
  }
}