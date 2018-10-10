import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Intro extends Component {
  render() {
    if (this.props.section == 'work'
    || this.props.section == 'about'
    || this.props.section == 'contact') {
      return (
        <section className="portfolio__intro">
          <div className="portfolio__photo">Photo</div>
          <p className="portfolio__blurb">Hello! I'm Chelsie, a web designer and developer. I've worked mostly in the Education and NonProfit sectors and have worn several hats over the course of my professional career, from Design Lead to Software Engineer. Most of my professional experience is in Drupal. While I'm comfortable working on my own, I also love teaching and contributing alongside teammates.</p>
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  };
}
