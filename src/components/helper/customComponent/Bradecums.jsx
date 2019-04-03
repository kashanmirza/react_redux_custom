import React from 'react';
import ReactDOM from 'react-dom';

class Bradecums extends React.Component {
  render() {
    return (
      <div>
        <p className="breadcrumb">Welcome to / {this.props.componentName}</p>
      </div>
    );
  }
}

export default Bradecums;