import { combineReducers } from 'redux';
import lawsuits from './LawsuitsListReducer';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  lawsuits
})

export default rootReducer;