import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class About extends Component {
  render() {
      return (
        <section className="portfolio__about">
          <p>I deliver (both single-handedly and on project teams of various sizes) beautiful and functional CMS sites using Drupal, ExpressionEngine, and Wordpress. (I’m a Drupal developer at heart!) </p>
          <p>I also enjoy researching design, design systems, and design processes. I’m very interested in how project teams bridge the gap between UX, visual design, and front end development. I’m also curious about how project teams can work best together (an area of interest which combines agile project management methodology, team psychology, and design and development workflow.</p>
          <p>In general, I enjoy creating all kinds of things. I designed and built my first website, a play-by-post forum RPG, when I was 11 years old, and I’ve been obsessed with world building, design, and creative writing ever since. </p>
          <p>I also love to write, knit, perform (a cappella and ballet), teach (ballet), game (ask me about my Sims 4 Legacy Challenge or my friends’ DnD campaign), and teach tricks to my cat.</p>
        </section>
      );
    }
  };
