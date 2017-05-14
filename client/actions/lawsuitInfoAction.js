import axios from 'axios';

export function fetchLawsuitInfo (infoObj) {
  return function (dispatch) {
    return axios.post('/fetch/lawsuitinfo', infoObj)
      .then(response => dispatch({ type: 'FETCH_LAWSUITINFO_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_LAWSUITINFO_REJECTED', payload: err }));
  };
}

export function fetchLawsuitUsers (infoObj) {
  return function (dispatch) {
    return axios.post('/fetch/lawsuitusers', infoObj)
      .then(response => dispatch({ type: 'FETCH_LAWSUITUSERS_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_LAWSUITUSERS_REJECTED', payload: err }));
  };
}

