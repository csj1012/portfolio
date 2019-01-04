import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ children }) => (
  <nav className="portfolio__nav">
    <ul>
      <li><NavLink to='/about' activeClassName="nav--active">Get to know me</NavLink></li>
      <li><NavLink to='/work' activeClassName="nav--active">View my work</NavLink></li>
      <li><NavLink to='/contact' activeClassName="nav--active">Get in touch</NavLink></li>
    </ul>
  </nav>
)

export default Nav
