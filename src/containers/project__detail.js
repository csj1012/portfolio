import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getPost from '../actions';

import ProjectsList from './projects__list';

class ProjectDetail extends Component {
  renderProjectImage(projectData) {
  if (!projectData.image) {
    return <span>Visit this thing</span>;
  }

  return (
    <div>
      <img src={projectData.image.src} alt={projectData.image.alt} />
      <span className="portfolio__project-detail__image__caption">
        {projectData.image.caption}
        <em>({projectData.organization})</em>
      </span>
    </div>
  );
}

renderProjectTechList(projectData) {
  return projectData.techs.map((tech) => {
    return (
      <li key={tech}>{tech}</li>
    )
  }
)
}

renderProjectLinks(projectData) {
  return projectData.links.map((link) => {
    return (
      <li key={link.text}>
        <a href={link.href}>
          {link.text}
        </a>
      </li>
    );
  });
}

  render() {
    const { id } = this.props.match.params;

    // const post = getPost(id);
    // console.log(post);

    const projectData = this.props.project.projects.find(e => e.id === id);

    console.log(projectData);

    return (
      <section className="portfolio__project-detail-wrapper">
        <ProjectsList />
        <section className="portfolio__project-detail">
          <h3>{projectData.title}</h3>
          <p className="portfolio__project-detail__blurb">{projectData.shortDescription}</p>
          <p className="portfolio__project-detail__techs">
            {projectData.techs &&
              <ul>
                {this.renderProjectTechList(projectData)}
              </ul>
            }
          </p>

          {projectData.links &&
            <ul>
              {this.renderProjectLinks(projectData)}
            </ul>
          }

          <a className="portfolio__project-detail__image-wrapper" href={projectData.view}>
            {this.renderProjectImage(projectData)}
          </a>

            <p>{projectData.description}</p>

        </section>
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
