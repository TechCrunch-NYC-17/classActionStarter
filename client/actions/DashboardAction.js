import axios from 'axios';

export const FETCH_MY_LIST = 'FETCH_MY_LIST';

export function fetchMyList (username) {
  return dispatch => axios.post('/fetch/mylist', username)
    .then((data) => dispatch({ type: FETCH_MY_LIST, payload: data }));
};
