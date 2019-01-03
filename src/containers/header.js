import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ children }) => (
  <header className="page-header">
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact" exact>Contact</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
