import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './containers/header';
import Intro from './containers/intro';
import About from './containers/about';
import Contact from './containers/contact';
import Nav from './containers/nav.js';
import Projects from './containers/projects.js';

export default class App extends Component {
  constructor(props) {
   super(props);
   this.state = {section: 'work'};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
   this.setState(state => ({
     section: e
   }));
  }

  render() {
    const section = this.state.section;
    const classes = 'portfolio__wrapper' + ' portfolio__wrapper--section-' + section;

    return (
      <div className={classes}>
        <Header />
        <About section={section} />
        <Contact section={section} />
        <Nav onNavClick={this.handleClick} />
        <Projects onClick={this.handleClick} section={section} />
        <Intro section={section} />
        <div className="portfolio__react-badge">Built with <a href="React!">React!</a></div>
      </div>
    );
  };
}
