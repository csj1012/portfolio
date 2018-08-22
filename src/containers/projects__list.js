import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../actions';
import { bindActionCreators } from 'redux';

class ProjectsList extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      return (
        <li onClick={() => this.props.selectProject(project)}
            className="portfolio__projects__list__project"
            key={project.title}>
          <span>{project.title}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <aside className="portfolio__projects">
        <ul className="portfolio__projects__list">
          <lh>Featured Projects</lh>
          {this.renderList()}
        </ul>
      </aside>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProject: selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
