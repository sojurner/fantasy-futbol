import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  session: sessionReducer,
  form: reduxFormReducer
});

export default rootReducer;
