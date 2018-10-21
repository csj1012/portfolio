import React, { Component } from 'react';
import { selectProject } from '../actions';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class ProjectsTeaserList extends Component {

  renderList() {
    return this.props.projects.map((project) => {

      return (
        <li onClick={() => this.props.selectProject(project)}
            className="portfolio__projects__list--teaser__project"
            key={project.title}>
            <h2 className="projects__list--teaser__project__title">{project.title}</h2>
            <p className="projects__list--teaser__project__organization">{project.organization} ({project.year})</p>
          <div className="portfolio__projects__list--teaser__project__image-wrapper">
            {project.teaser && <img src={project.teaser.src} className="projects__list--teaser__project__image"/>}
          </div>
          <div className="projects__list--teaser__project__text">
            <span className="projects__list--teaser__project__text-container">
              <p className="projects__list--teaser__project__description">{project.shortDescription} (Project role: {project.role})</p>
            </span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="portfolio__projects--teaser">
        <div className="portfolio__projects--teaser--wrapper">
          Projects Teaser List.
          <h3>Projects</h3>
          <ul className="portfolio__projects__list--teaser">
            {this.renderList()}
          </ul>
        </div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsTeaserList);
