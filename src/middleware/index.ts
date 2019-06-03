import { takeLatest } from 'redux-saga/effects';
import { registerUser, fetchPlayers } from './sagas';

export function* apiMiddleware(props) {
  yield takeLatest('REGISTER_USER', registerUser);
  yield takeLatest('REQUEST_PLAYERS', fetchPlayers);
}
