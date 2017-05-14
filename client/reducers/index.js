import { combineReducers } from 'redux';

import LeftNavReducer from './leftNavReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  leftNavToggle: LeftNavReducer,
  form: formReducer,
})

export default rootReducer;