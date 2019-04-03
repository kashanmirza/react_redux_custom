import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import menu from '../../constants/menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menu,
      active: this.props.history.location.pathname || menu.home.url // eslint-disable-line
    };
  }

  componentWillMount() {
    this.props.history.listen(() => { // eslint-disable-line
      this.setState({ active: this.props.history.location.pathname });
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {
              Object.keys(this.state.menu).map((item) => {
                return (
                  <li className={this.state.active === this.state.menu[item].url ? 'nav-item active' : 'nav-item'} key={item}>
                    <Link to={this.state.menu[item].url} className="nav-link">{this.state.menu[item].label}</Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
