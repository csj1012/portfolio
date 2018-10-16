import React, { Component } from 'react';
import { selectProject } from '../actions';
import { connect } from 'react-redux';
import ImagePalette from 'react-image-palette';

import { bindActionCreators } from 'redux';

class ProjectsTeaserList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onNavClick('detail');
  }

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
            {/* <span className="project__palette">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span> */}
          </div>

          {/* {project.image.src}
            <ImagePalette image={project.image.src}>
              {({ backgroundColor, color, alternativeColor }) => (
                <div style={{ backgroundColor, color }}>
                  This div has been themed based on
                  <span style={{ color: alternativeColor }}>{project.image}</span>
                </div>
              )}
            </ImagePalette> */}
        </li>
      );
    });
  }

  render() {
    return (
      <section className="portfolio__projects--teaser">
        <ul className="portfolio__projects__list--teaser">
          {this.renderList()}
        </ul>
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
