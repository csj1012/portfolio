import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsTeaserList from './project__teaser-list';

export class ProjectDetail extends Component {
  renderProjectImage() {
    if (!this.props.selected.image) {
      return <span>Visit this thing</span>;
    }

    return (
      <div>
      <img src={this.props.selected.image.src} alt={this.props.selected.image.alt} />
      <span>
        {this.props.selected.image.caption}
        <em>{this.props.selected.title}</em> >
      </span>
      </div>
    );
  }

  renderProjectTechList() {
    return this.props.selected.techs.map((tech) => {
      return (
        <li key={tech}>{tech}</li>
      )
    }
  )
  }

  renderProjectLinks() {
    return this.props.selected.links.map((link) => {
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
    if (!this.props.selected) {
      return (
        <ProjectsTeaserList />
      );
    }
      return (
        <section className="portfolio__project-detail">
          <a href={this.props.selected.view}>
            {this.renderProjectImage()}
          </a>

          <p>
            {this.props.selected.techs &&
              <ul>
                {this.renderProjectTechList()}
              </ul>
            }
          </p>

            <p>{this.props.selected.description}</p>

            {this.props.selected.links &&
              <ul>
                {this.renderProjectLinks()}
              </ul>
            }
        </section>
      );

  }
}

function mapStateToProps(state) {
  return {
    selected: state.selected
  };
}

export default connect(mapStateToProps)(ProjectDetail);
