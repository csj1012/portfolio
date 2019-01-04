import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Layout from './layout'
import Home from './home'
import About from './about'
import Work from './work'
import Contact from './contact'
import Nav from './nav'
import Intro from './intro'

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 300 }

  return (
  	<Layout>
    <Nav />
    <Intro />
      <TransitionGroup component="main" className="portfolio__section-wrapper">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section>
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default withRouter(App)
