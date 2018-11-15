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
    <div className="portfolio__project-detail__detail__image">
      <img src={"/portfolio/" + projectData.image.src} alt={projectData.image.alt} />
      <span className="portfolio__project-detail__detail__image__caption">
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
      <section className="portfolio__project-detail">
        <ProjectsList />
        <div className="portfolio__project-detail__detail">
          <h3>{projectData.title} ({projectData.year})</h3>
          <p className="portfolio__project-detail__detail__blurb">{projectData.shortDescription}</p>
          <p className="portfolio__project-detail__detail__blurb"><strong>Project role:</strong> {projectData.role}</p>
          <p className="portfolio__project-detail__detail__techs">
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

            {this.renderProjectImage(projectData)}

            <p className="portfolio__project-detail__detail__description">{projectData.description}</p>

        </div>
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
