import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App';
import Director from './components/PhoneList';

export default function () {
  return (
    <Route path='/' component={App}>
      <IndexRedirect to='/director' />
      <Route path='/director' component={Director} />
    </Route>
  );
}
