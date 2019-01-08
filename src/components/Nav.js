import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/relevant">
              Relevant Articles
            </NavLink>
            </li>
          <li>
            <NavLink to="/current">
              Current Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved">
              Saved Articles: <span>0</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="about">
              What is Torcano?
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}