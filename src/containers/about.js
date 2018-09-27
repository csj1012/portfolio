import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class About extends Component {
  render() {
    if (this.props.section == 'about') {
      return (
        <section className="portfolio__about">
          ABOUT ME HI
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  };
}
