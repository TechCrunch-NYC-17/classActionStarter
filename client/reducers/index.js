import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';
import lawsuits from './lawsuitsListReducer';
import user from './userReducer';
import myAccount from './myAccountReducer';
import leftNavReducer from './leftNavReducer';
import login from './loginReducer';
<<<<<<< HEAD
import lawsuit from './lawsuitReducer';
=======
import lawsuitID from './lawsuitcreation';
>>>>>>> set up form data
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
<<<<<<< HEAD
  lawsuit,
  lawsuitinfo
=======
  lawsuitID
>>>>>>> set up form data
});

export default rootReducer;
