import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';
import { userReducer } from './userReducer';
import { playerReducer } from './playerReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  form: reduxFormReducer,
  loading: loadingReducer,
  players: playerReducer
});

export default rootReducer;
