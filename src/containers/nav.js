import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Nav extends Component {
render() {
    const section = this.props.section;

    return (
      <p className="portfolio__links">
        <ul>
          <li><Link to='/work'>Projects</Link></li>
          <li><Link to='/about'>About Me</Link></li>
          <li><Link to='/contact'>Résumé & Contact</Link></li>
        </ul>
      </p>
    );
  };
}

function mapStateToProps(state) {
  return {
    section: state.section
  };
}

export default connect(mapStateToProps)(Nav);
