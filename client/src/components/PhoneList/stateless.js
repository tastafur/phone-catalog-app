import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Director extends Component {
  static propTypes = {
    person: PropTypes.string,
    phonesFetch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    props.phonesFetch();
  }

  render() {
    return (
      <div>
        {'Phones'}
      </div>
    );
  }
}
