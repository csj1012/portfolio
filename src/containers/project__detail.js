import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getPost from '../actions';

class ProjectDetail extends Component {
  render() {
    const { id } = this.props.match.params;

    // const post = getPost(id);
    // console.log(post);

    const projectData = this.props.project.projects.find(e => e.id === id);

    console.log(projectData);

    return (
      <section className="portfolio__project-detail">
        <a href="/" className="portfolio__project-detail__banner">
          <img src="https://loremflickr.com/640/360" />
          <span>Texty text text.</span>
        </a>

        <p>More info about {projectData.title}</p>

        <ul>
          <li><a href="/">Project link one</a></li>
          <li><a href="/">Project link two</a></li>
          <li><a href="/">Project link three</a></li>
        </ul>

      </section>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    project: state
  }
}

export default connect(mapStateToProps)(ProjectDetail);
