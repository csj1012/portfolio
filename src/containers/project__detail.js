import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsTeaserList from './project__teaser-list';

export class ProjectDetail extends Component {
  handleClick(e) {
   this.setState(state => ({
     section: e
   }));
  }

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
    if (this.props.section != "work") {
      return <div></div>;
    }

    if (!this.props.selected) {
      return (
        <div className="portfolio__projects--teaser--wrapper">
          <h3>Projects</h3>
          <ProjectsTeaserList onNavClick={this.handleClick} />
        </div>
      );
    }
      return (
        <section className="portfolio__project-detail">
          <h3>{this.props.selected.title}</h3>
          <p className="portfolio__project-detail__blurb">{this.props.selected.shortDescription}</p>
          <a className="portfolio__project-detail__image-wrapper" href={this.props.selected.view}>
            {this.renderProjectImage()}
          </a>

          <p className="portfolio__project-detail__techs">Techs, languages, and libraries: 
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
