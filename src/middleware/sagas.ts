import { put, call } from 'redux-saga/effects';
import * as apiCall from '../utils/apicalls';

export function* registerUser(props) {
  yield put({
    type: 'IS_LOADING',
    payload: true
  });

  // const data = yield apiCall.registerUser();
}

export function* fetchPlayers(props) {
  yield put({ type: 'IS_LOADING', payload: true });
  try {
    const { count, players } = yield call(
      apiCall.requestPlayers,
      props.pageNumber
    );
    yield put({
      type: 'SET_PLAYERS',
      payload: { count, players: { [props.pageNumber]: players } }
    });
  } catch (err) {
    yield put({ type: 'PLAYER_REQUEST_FAILED', err });
  }

  yield put({ type: 'HAS_LOADED', payload: false });
}
