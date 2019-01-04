import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Intro extends Component {
  render() {
      return (
        <section className="portfolio__intro">
          <div className="portfolio__intro__photo">
            <img src="/portfolio/photo.png" />
          </div>
          <p className="portfolio__intro__blurb">I’m a full stack and Drupal developer specializing in front end. I also dabble in design (and a bunch of other things!). I've worked mostly in the Education and NonProfit sectors and have worn several hats over the course of my professional career, from Design Lead to Software Engineer.</p>
        </section>
      );
    }
  };
