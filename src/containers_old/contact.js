import React, { Component } from 'react';
import Resume from './resume';

export default class Contact extends Component {
  render() {
      return (
        <section className="portfolio__contact">
          <ul>
            <li>Email: <a mailto="chelsiesjohnston@gmail.com">chelsiesjohnston@gmail.com</a></li>
            <li>Github: <a href="https://github.com/csj1012">csj1012</a></li>
            <li>Linkedin: <a href="https://www.linkedin.com/in/chelsiesjohnston/">chelsiesjohnston</a></li>
          </ul>


          <Resume />
        </section>
      );
    }
  };
