import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import Soapbox from './soapbox';

class Work extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      const path = `/project/${project.id}`;
      return (
        <li className="portfolio__project-teaser-list__project" key={project.title}>
          <Link to={path}>
            <h2 className="portfolio__project-teaser-list__project__title">{project.title}</h2>
            <p className="portfolio__project-teaser-list__project__organization">{project.organization} ({project.year})</p>
          <div className="portfolio__project-teaser-list__project__image-wrapper">
            {project.teaser &&
              <LazyLoadImage src={project.teaser.src} effect="black-and-white" alt={project.teaser.alt} className="portfolio__project-teaser-list__project__image"/>}
            <span class="portfolio__project-teaser-list__project__view-button">View Project</span>
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
          <li className="portfolio__project-teaser-list__soapbox">
            <Soapbox />
          </li>
          <li>Resume download button</li>
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

export default connect(mapStateToProps)(Work);
