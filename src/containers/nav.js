import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
render() {
    return (
      <div className="portfolio__nav">
        <ul>
          <li><NavLink to='/about' activeClassName="nav--active">Get to know me</NavLink></li>
          <li><NavLink to='/work' activeClassName="nav--active">View my work</NavLink></li>
          <li><NavLink to='/contact' activeClassName="nav--active">Get in touch</NavLink></li>
        </ul>
      </div>
    );
  };
}
