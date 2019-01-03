import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <section className="portfolio__header">
        <Link to="/work"><h1>Chelsie Johnston</h1></Link>
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
