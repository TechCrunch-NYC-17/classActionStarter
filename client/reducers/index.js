import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';
import lawsuits from './lawsuitsListReducer';
import user from './userReducer';
import myAccount from './myAccountReducer';
import LeftNavReducer from './leftNavReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  leftNavToggle: LeftNavReducer,
  form: formReducer,
  lawsuits,
  dashboard,
  user,
  myAccount
});

export default rootReducer;
