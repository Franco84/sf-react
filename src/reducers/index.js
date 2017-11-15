import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import candidateReducer from './candidate_reducer'

const rootReducer = combineReducers({
  form: reducerForm,
  candidate: candidateReducer,
  state: (state = {}) => state
});

export default rootReducer;
