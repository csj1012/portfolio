import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProjectDetail extends Component {
  render() {
    if (!this.props.selected) {
      return <div>No project selected :(</div>;
    }  
      return (
        <div>
          {this.props.selected.title}
        </div>
      );

  }
}

function mapStateToProps(state) {
  return {
    selected: state.selected
  };
}

export default connect(mapStateToProps)(ProjectDetail);
