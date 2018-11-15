import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Intro extends Component {
  render() {
      return (
        <section className="portfolio__intro">
          <div className="portfolio__intro__photo">
            <img src="/portfolio/photo.png" />
          </div>
          <p className="portfolio__intro__blurb">Hello! I'm Chelsie, a web designer and developer. I've worked mostly in the Education and NonProfit sectors and have worn several hats over the course of my professional career, from Design Lead to Software Engineer. Most of my development experience is in Drupal, though as a designer I also deliver captivating visual designs and design concepts. While I'm comfortable working on my own, I also love teaching and contributing alongside teammates.</p>
        </section>
      );
    }
  };
