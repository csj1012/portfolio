import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // 'test' will eventually hold the thing that is clicked
    this.props.onNavClick('test');
    console.log(e);
  }

render() {
    const section = this.props.section;

    return (
      <p className="portfolio__links">
        <ul>
          <li key="work" onClick={this.handleClick}>My Work</li>
          <li key="about" onClick={this.handleClick}>About Me</li>
          <li key="contact" onClick={this.handleClick}>Get in Touch?</li>
        </ul>
      </p>
    );
  };
}
//
// function mapStateToProps(state) {
//   return {
//     selected: state.selected
//   };
// }
//
// export default connect(mapStateToProps)(Nav);
