import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Intro extends Component {
  render() {
      return (
        <section className="portfolio__intro">
          <div className="portfolio__intro__photo">
            <img src="/photo.png" />
          </div>
          <p className="portfolio__intro__blurb">Hello! I'm Chelsie, a web designer and developer. I've worked mostly in the Education and NonProfit sectors and have worn several hats over the course of my professional career, from Design Lead to Software Engineer. Most of my professional experience is in Drupal. While I'm comfortable working on my own, I also love teaching and contributing alongside teammates.</p>
        </section>
      );
    }
  };
