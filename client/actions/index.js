import axios from 'axios';

export const TOGGLE_LEFT_NAV = 'TOGGLE_LEFT_NAV';
export const POST_LAWSUIT = 'POST_LAWSUIT';

export const toggleLeftNav = bool => ({ type: TOGGLE_LEFT_NAV, payload: !bool });

export const postLawsuit = obj => {
  console.log(obj);
  return dispatch => axios.post('/postlawsuit', obj)
    .then(({ data }) => {
      console.log(data);
      dispatch({ type: POST_LAWSUIT, payload: obj });
    });
};
