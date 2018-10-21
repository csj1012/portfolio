import React, { Component } from 'react';
import Resume from './resume';

export default class Contact extends Component {
  render() {
      return (
        <section className="portfolio__contact">
          <ul>
            <li>Email: chelsiesjohnston@gmail.com</li>
            <li>Github: /chelsiejohnston</li>
            <li>Twitter: @aimless_muse</li>
            <li>Linkedin: /chelsiesjohnston</li>
          </ul>


          <Resume />
        </section>
      );
    }
  };
