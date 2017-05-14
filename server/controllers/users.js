const db = require('../db/config.js');

module.exports = {
  fetchMyAccount: ({ body }, res) => {
    const { username } = body;
    console.log(' users user naem : ', username);
    db.raw(`SELECT * FROM users WHERE displayname=?`, username)
      .then((data) => {
        res.send(data[0]);
      });
  }
};
