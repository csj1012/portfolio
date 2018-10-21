import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class ProjectsList extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      const path = `/project/${project.id}`;
      return (
        <li key={project.title}>
          <Link to={path}>{project.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <aside className="portfolio__project-detail__projects-list">
        <ul>
          <lh>Projects</lh>
          {this.renderList()}
        </ul>
      </aside>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProject: selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
