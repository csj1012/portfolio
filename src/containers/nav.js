import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
render() {
    return (
      <div className="portfolio__nav">
        <ul>
          <li><NavLink to='/work' activeClassName="nav--active">Projects</NavLink></li>
          <li><NavLink to='/about' activeClassName="nav--active">About Me</NavLink></li>
          <li><NavLink to='/contact' activeClassName="nav--active">Contact</NavLink></li>
        </ul>
      </div>
    );
  };
}
