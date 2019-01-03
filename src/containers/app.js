import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Layout from './layout'
import Home from './home'
import About from './about'
import Contact from './contact'

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 200 }

  return (
  	<Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="page-main-inner">
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default withRouter(App)
