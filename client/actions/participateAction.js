import axios from 'axios';

export function participate(infoObj) {
  console.log(infoObj)
  axios.get('/participate', {
    params: infoObj
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
