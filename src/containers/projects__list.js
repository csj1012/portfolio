import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectsList extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      return (
        <li className="portfolio__projects__list__project" key={project.title}>
          <span>{project.title}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <aside className="portfolio__projects">
        <ul className="portfolio__projects__list">
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

export default connect(mapStateToProps)(ProjectsList);
