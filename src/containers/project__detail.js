import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsTeaserList from './project__teaser-list';

export class ProjectDetail extends Component {
  render() {
      return (
        <section className="portfolio__project-detail">
          Project detail.
        </section>
      );

  }
}

function mapStateToProps(state) {
  return {
    selected: state.selected
  };
}

export default connect(mapStateToProps)(ProjectDetail);
