const User = require('../models/user');

module.exports = {
  fetchMyAccount: ({ body }, res) => {
    User.findByUsername();
  }
};
