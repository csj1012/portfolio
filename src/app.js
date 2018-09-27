import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './containers/header';
import Intro from './containers/intro';
import Nav from './containers/nav.js';
import ProjectsList from './containers/projects__list';
import ProjectDetail from './containers/project__detail';

export default class App extends Component {
  constructor(props) {
   super(props);
   this.state = {section: 'work'};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   this.setState(state => ({
     section: 'work'
   }));
  }

  render() {
    const section = this.state.section;

    return (
      <div className="portfolio__wrapper">
        {this.state.section}
        <Header />
        <Intro />
        <Nav onNavClick={this.handleClick} />
        <ProjectDetail />
        <ProjectsList />
      </div>
    );
  };
}

// function mapStateToProps(state) {
//   return {
//     selected: state.selected
//   };
// }
//
// export default connect(mapStateToProps)(Nav);