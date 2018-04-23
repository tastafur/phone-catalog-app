import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App';
import PhoneList from './components/PhoneList';

export default function () {
  return (
    <Route path='/' component={App}>
      <IndexRedirect to='/phone-list' />
      <Route path='/phone-list' component={PhoneList} />
    </Route>
  );
}
