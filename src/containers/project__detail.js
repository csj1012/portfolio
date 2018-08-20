import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProjectDetail extends Component {
  render() {
    console.log(this);
    if (!this.props.selected) {
      return <div>No project selected :(</div>;
    } else {
      return (
        <div>
          {this.props.selected.title}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    selected: state.selectedProject
  };
}

export default connect(mapStateToProps)(ProjectDetail);
