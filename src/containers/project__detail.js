import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = (props) => {
  console.log(props);
}

// class ProjectDetail extends Component {
//   render() {
//     const { title } = this.props.match.params;
//     console.log(this);
//
//     return (
//       <section className="portfolio__project-detail">
//         <p><Link to="/">Back</Link></p>
//         <p>Viewing project "{title}"</p>
//
//       </section>
//     );
//   }
// }
//
export default ProjectDetail;
