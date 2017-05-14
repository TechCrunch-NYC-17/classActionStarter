import axios from 'axios';

export const FETCH_MY_ACCOUNT = 'FETCH_MY_ACCOUNT';

export function fetchMyAccount (userId) {
  return dispatch => axios.post('/fetch/myaccount', { userId })
    .then((data) => dispatch({ type: FETCH_MY_ACCOUNT, payload: data }));
}
