import React, { Component } from 'react';
import Resume from './resume';

export default class Contact extends Component {
  render() {
    if (this.props.section == 'contact') {
      return (
        <section className="portfolio__contact">
          <Resume />
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  };
}
