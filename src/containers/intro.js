import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Intro extends Component {
  render() {
    return (
      <section className="portfolio__intro">
        <div className="portfolio__photo">Photo</div>
        <p className="portfolio__blurb">I'm a web designer and developer. I have lots of experience in Drupal. I created my first website when I was ten years old. I love my cat and I just learned how to knit. I'm pretty depressed. Please use my photo to discriminate against me. Let's get in touch!</p>
      </section>
    );
  };
}

function mapStateToProps(state) {
  return {
    selected: state.selected
  };
}

export default connect(mapStateToProps)(Intro);
