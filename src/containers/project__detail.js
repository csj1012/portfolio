import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getPost from '../actions';

class ProjectDetail extends Component {
  render() {
    const { id } = this.props.match.params;

    const post = getPost(id);
    console.log(post);

    const projectData = this.props.project.projects.find(e => e.id === id);

    console.log(projectData);

    return (
      <section className="portfolio__project-detail">
        <p><Link to="/">Back</Link></p>
        <p>Viewing project "{projectData.title}"</p>

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
