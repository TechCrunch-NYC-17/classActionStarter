import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';
import lawsuits from './lawsuitsListReducer';
import user from './userReducer';
import myAccount from './myAccountReducer';
import leftNavReducer from './leftNavReducer';
import login from './loginReducer';
import lawsuit from './lawsuitReducer';
import { reducer as formReducer } from 'redux-form';
import lawsuitinfo from './lawsuitInfoReducer';

const rootReducer = combineReducers({
  leftNavToggle: leftNavReducer,
  form: formReducer,
  lawsuits,
  dashboard,
  user,
  myAccount,
  login,
  lawsuit,
  lawsuitinfo
});

export default rootReducer;
