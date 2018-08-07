import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);

    return (
      <div className="portfolio__project-detail">
        Viewing project "{id}"
      </div>
    );
  }
}

export default ProjectDetail;
