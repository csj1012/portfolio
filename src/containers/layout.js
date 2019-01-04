import React from 'react'
import Header from './header'

const Layout = ({ children }) => (
  <section className="portfolio__wrapper">
    <Header />
    {children}
  </section>
)

export default Layout
