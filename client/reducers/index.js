import { combineReducers } from 'redux';
import lawsuits from './LawsuitsListReducer';
import dashboard from './dashboardReducer';

import LeftNavReducer from './leftNavReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  leftNavToggle: LeftNavReducer,
  form: formReducer,
  lawsuits,
  dashboard
});

export default rootReducer;
