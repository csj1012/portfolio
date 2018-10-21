import React, { Component } from 'react';
import ProjectsList from './projects__list';
import ProjectDetail from './project__detail';
import ProjectsTeaserList from './project__teaser-list';

export default class Projects extends Component {
  render() {
    if (this.props.section === 'detail') {
      return (
        <div>
          Project Detail.
        </div>
      )
    }

    if (this.props.section === 'work') {
      return (
        <div>
          Section is {this.props.section}
          <ProjectsTeaserList section={this.props.section}/>
        </div>
      )
    }

    else {
      return (
        <div className="hidden"></div>
      )
    }
  }
}
