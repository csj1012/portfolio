import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import About from './about'

const Home = ({ match }) => (
  <section className="portfolio__section--home">
    <About />
  </section>
)

export default Home
