import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsList from './projects__list';
import ProjectDetail from './project__detail';
import ProjectsTeaserList from './project__teaser-list';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    console.log('handleClick called in projects.js');
   this.setState(state => ({
     section: e
   }));
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
      <div>
        <ProjectsList section={this.props.section} />
        <ProjectDetail section={this.props.section}/>
      </div>
    )
  }
}
