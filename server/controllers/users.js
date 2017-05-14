const User = require('../models/user');

module.exports = {
  fetchMyAccount: ({ body }, res) => {
    const { username } = body;
    User.findByUsername(username, (data) => {
      console.log('data : ', data);
    });
  }
};
