/* eslint no-console: 0 */

import { put, takeLatest, call } from 'redux-saga/effects';

// Actions
import { PHONES_FETCH, phonesSet } from '../actions/phones';

// Srvs
import { getPhones } from '../services/phones';

export function* phonesProcess() {
  try {
    const phones = yield call(getPhones, { baseUrl: 'http://localhost:3000'});
    yield put(phonesSet(phones));
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchPhones() {
  yield takeLatest(PHONES_FETCH, phonesProcess);
}
