import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProjectsList extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      const path = `/project/${project.id}`;
      return (
        <li className="portfolio__projects__list__project" key={project.title}>
          <Link to={path}>{project.title}</Link>
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
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(ProjectsList);
