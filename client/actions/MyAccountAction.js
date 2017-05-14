import axios from 'axios';

export const FETCH_MY_ACCOUNT = 'FETCH_MY_ACCOUNT';

export function fetchMyAccount(username) {
  return dispatch => axios.post('/fetch/myaccount', { username })
    .then((data) => dispatch({ type: FETCH_MY_ACCOUNT, payload: data.data[0] }));
}
