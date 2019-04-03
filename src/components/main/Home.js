import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser } from './../../redux/actions/userActions';
import { fetchTweets } from './../../redux/actions/tweetsActions';

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets
  };
})

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    userFetched: PropTypes.bool,
    tweets: PropTypes.array
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchUser());
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets}>load tweets</button>;
    }

    const mappedTweets = tweets.map((tweet) => <li key={tweet.id}>{tweet.text}</li>);

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>;
  }

  fetchTweets = () => {
    this.props.dispatch(fetchTweets());
  };
}

