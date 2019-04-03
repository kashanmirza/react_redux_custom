import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic';

export default class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.match
    };
  }

  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.state.match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${this.state.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.state.match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${this.state.match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={this.state.match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}
