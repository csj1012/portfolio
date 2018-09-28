import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    if (this.props.section == 'contact') {
      return (
        <section className="portfolio__contact">
          CONTACT ME UP
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  };
}
