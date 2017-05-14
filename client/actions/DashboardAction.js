import axios from 'axios';

export const FETCH_MY_LIST = 'FETCH_MY_LIST';

export function fetchMyList (userID) {
  console.log('action userID : ', userID);
  return dispatch => axios.post('/fetch/mylist', { userID })
    .then((data) => dispatch({ type: FETCH_MY_LIST, payload: data.data }));
}
