import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const App = ({ children }) =>
  <div className={'app'}>
    {children}
  </div>;


App.propTypes = {
  children: PropTypes.node
};

export default App;
