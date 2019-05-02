import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

class NavBar extends Component {
  static defaultProps = {
    showForm() { }

  }
  static propTypes = {
    showForm: PropTypes.func
  }
  render() {
    return(
      <nav className="header">
        <h1 className="logo"><a href="/">Recipe App</a></h1>
        <ul className="main-nav">
        <li><a onClick={this.props.showForm}>New Recipe</a></li>
        </ul>
      </nav>

    )
  }
}

export default NavBar;
