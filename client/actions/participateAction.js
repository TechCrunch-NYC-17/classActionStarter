import axios from 'axios';

module.exports = function participate (infoObj) {
  axios.post('/post/participate', infoObj)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};
