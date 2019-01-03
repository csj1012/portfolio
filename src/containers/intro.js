import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Collapse from 'react-css-collapse';

class Intro extends Component {
  render(props) {
    const pathname = this.props.location.pathname;
    console.log(pathname);

      return (
        <Collapse isOpen={pathname === '/'} transition="height 250ms cubic-bezier(.4, 0, .2, 1)" className="portfolio__intro">
          <p className="portfolio__intro__blurb">I’m a full stack and Drupal developer specializing in front end. I also dabble in design (<a href="#">and a bunch of other things</a>).</p>
        </Collapse>
      );
    }
  };

export default withRouter(Intro);
