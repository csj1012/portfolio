import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <section className="portfolio__header">
        <h1>Chelsie Johnston</h1>
      > <h2>Project Title</h2>
      </section>
    );
  };
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    project: state
  }
}

export default connect(mapStateToProps)(Header);
