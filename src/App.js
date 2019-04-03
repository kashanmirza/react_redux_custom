import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/menu/Header';
import Routes from './components/menu/Routes';
import Footer from './components/menu/Footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <Header/>
          <Routes/>
          <Footer/>
        </div>
      </Router>
    );
  }
}
