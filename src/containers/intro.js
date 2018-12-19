import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Intro extends Component {
  render() {
      return (
        <section className="portfolio__intro">
          <p className="portfolio__intro__blurb">I’m a full stack and Drupal developer specializing in front end. I also dabble in design (<a href="#">and a bunch of other things</a>).</p>
        </section>
      );
    }
  };
