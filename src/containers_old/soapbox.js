import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Soapbox extends Component {
  render() {
      return (
        <section className="portfolio__soapbox">
        I strongly believe in:
        <ul>
          <li>Nimble, agile project methodologies</li>
          <li>Leadership by example (and team building exercises)</li>
          <li>Maintaining clean, sensible markup and styling using BEM</li>
          <li>A streamlined development and deployment workflow - from local to live - using automated testing and deployment tools</li>
          <li>A well-organized, cohesive design pattern library</li>
          <li>Transparency and honesty in organizations, with clients, and especially among project teams</li>
          <li>Solving problems at the root instead of patching over them</li>
          <li>Using the right tools for the job; Doing what works and improving what doesn’t</li>
          <li>Delivering quality (pull requests, code reviews, writing, and web projects) as painlessly as possible</li>
        </ul>
        </section>
      );
    }
  };
