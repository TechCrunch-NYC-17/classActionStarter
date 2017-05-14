import axios from 'axios';

export function fetchLawsuitsList () {
  return function (dispatch) {
    return axios.get('/fetch/lawsuits')
      .then(response => dispatch({ type: 'FETCH_LAWSUITS_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_LAWSUITS_REJECTED', payload: err }));
  };
}

