import axios from 'axios';
import { deauthenticateUser } from '../modules/auth';

export const TOGGLE_LEFT_NAV = 'TOGGLE_LEFT_NAV';
export const POST_LAWSUIT = 'POST_LAWSUIT';
export const FETCH_LAWSUIT = 'FETCH_LAWSUIT';

export const toggleLeftNav = bool => ({ type: TOGGLE_LEFT_NAV, payload: !bool });

export const postLawsuit = obj => {
  return dispatch => axios.post('/post/lawsuit', obj)
    .then(({ data }) => {
      dispatch({ type: 'POST_LAWSUIT', payload: obj });
    });
};

export const getLawsuit = lawsuitId => {
  return dispatch => axios.get(`/fetch/lawsuits/${lawsuitId}`)
    .then(({ data }) => {
      console.log('getLawsuit action data : ', data);
      dispatch({ type: FETCH_LAWSUIT, payload: data[0] });
    });
};

export const postSignUp = obj => {
  return dispatch => axios.post('/signup', obj)
  .then(({ data }) => {
    dispatch({ type: 'POST_SignUp', payload: data });
  });
};

export const postLogin = obj => {
  console.log(obj)
  return dispatch => axios.post('/login', obj)
  .then(({ data }) => {
    console.log(data);
    dispatch({ type: 'POST_Login', payload: data });
  });
};

export const logoutUser = () => {
  return dispatch => axios.get('/logout')
    .then(({ data }) => deauthenticateUser())
    .catch((error) => {
      console.log('      ACTIONS/LOGIN_USER_SUCCESS | ', error);
    });
};
