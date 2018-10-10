import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onNavClick(e.target.dataset.section);
  }

render() {
    const section = this.props.section;

    return (
      <p className="portfolio__links">
        <ul>
          <li data-section="work" onClick={this.handleClick}>Projects</li>
          <li data-section="about" onClick={this.handleClick}>About Me</li>
          <li data-section="contact" onClick={this.handleClick}>Contact</li>
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
