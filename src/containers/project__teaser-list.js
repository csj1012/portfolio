import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProjectTeaserList extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      const path = `/project/${project.id}`;
      return (
        <li className="portfolio__project-teaser-list__project" key={project.title}>
          <Link to={path}>
            <h2 className="portfolio__project-teaser-list__project__title">{project.title}</h2>
            <p className="portfolio__project-teaser-list__project__organization">{project.organization} ({project.year})</p>
          <div className="portfolio__project-teaser-list__project__image-wrapper">
            {project.teaser && <img src={project.teaser.src} className="portfolio__project-teaser-list__project__image"/>}
          </div>
          <div className="portfolio__project-teaser-list__project__text">
            <span className="portfolio__project-teaser-list__project__text-container">
              <p className="portfolio__project-teaser-list__project__description">{project.shortDescription} (Project role: {project.role})</p>
            </span>
          </div>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <aside className="portfolio__project-teaser-list">
        <ul>
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

export default connect(mapStateToProps)(ProjectTeaserList);
