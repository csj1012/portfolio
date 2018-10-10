import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    return (
      <section className="portfolio__header">
        <h1><a href="/">Chelsie Johnston</a></h1>        
      </section>
    );
  };
}

function mapStateToProps(state) {
  return {
    selected: state.selected
  };
}

export default connect(mapStateToProps)(Header);
