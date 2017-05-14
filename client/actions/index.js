import axios from 'axios';

export const TOGGLE_LEFT_NAV = 'TOGGLE_LEFT_NAV';
export const POST_LAWSUIT = 'POST_LAWSUIT';

export const toggleLeftNav = bool => ({ type: TOGGLE_LEFT_NAV, payload: !bool });

export const postLawsuit = obj => {
  return dispatch => axios.post('/post/lawsuit', obj)
    .then(({ data }) => {
      dispatch({ type: 'POST_LAWSUIT', payload: obj });
    });
};

export const postSignUp = obj => {
  return dispatch => axios.post('/signup', obj)
  .then(({ data }) => {
    dispatch({ type: 'POST_SignUp', payload: data });
  });
};
