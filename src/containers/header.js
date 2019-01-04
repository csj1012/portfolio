import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ children }) => (
  <header className="portfolio__header">
    <NavLink to="/work"><h1>Chelsie Johnston</h1></NavLink>
  </header>
)

export default Header
