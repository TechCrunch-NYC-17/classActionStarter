const db = require('../db/config.js');
const User = {};

User.findByUsername = (username, cb) => {
  console.log(username)
  return db.raw(`select * from users where username='${username}'`)
    .then((user) => {
      return cb(user);
    })
    .catch((err) => { console.error(err); });
};

User.addUser = (username, password, displayname) => {
  return db('users').insert({ username: username, displayname: displayname, password: password })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = User;
