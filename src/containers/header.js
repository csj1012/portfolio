import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  renderTitle() {
    if (!this.props.selected) {
      return <div></div>;
    }

    return (
      <h2> > {this.props.selected.title}</h2>
    );
  }

  render() {
    return (
      <section className="portfolio__header">
        <h1>Chelsie Johnston</h1>
        {this.renderTitle()}
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
