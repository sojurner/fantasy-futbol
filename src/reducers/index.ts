import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';
import { userReducer } from './userReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  form: reduxFormReducer
});

export default rootReducer;
