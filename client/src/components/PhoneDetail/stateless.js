import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Director extends Component {
  static propTypes = {
    person: PropTypes.string,
    askForPersonSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: 'pepe'
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { askForPersonSubmit } = this.props;
    askForPersonSubmit();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <button type={'submit'}>Soy {this.state.name} ¿y tu?</button>
        { ' yo soy ' + this.props.person }
      </form>
    );
  }
}
