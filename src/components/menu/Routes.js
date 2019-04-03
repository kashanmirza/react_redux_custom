import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../main/Home';
import About from '../main/About';
import Contact from '../main/Contact';
import Topics from '../main/Topics';
import menu from '../../constants/menu';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menu
    };
  }

  render() {
    return (
      <div className="content">
        <Route path="/" exact component={Home}/>
        <Route path={this.state.menu.home.url} exact component={Home} />
        <Route path={this.state.menu.about.url} exact component={About} />
        <Route path={this.state.menu.contact.url} exact component={Contact} />
        <Route path={this.state.menu.topics.url} component={Topics} />
      </div>
    );
  }
}
