const db = require('../db/config.js');

module.exports = {
  fetch: (req, res) => {
    db.select().from('lawsuits').then(data => res.send(data));
  },

  post: ({ body }, res) => {
    const { title, category, description } = body;
    db.insert({ title, category, description })
      .into('lawsuits')
      .then(() => res.status(201).end());
  },

  participate: ({ body }, res) => {
    const { lawsuitID, userID } = body;
    db.insert({ lawsuitID, userID })
      .into('lawsuits_users')
      .then(() => res.status(201).end());
  },

  fetchParticipants: ({ body }, res) => {
    const { lawsuitID } = body;
    db.raw(`SELECT username FROM users INNER JOIN lawsuits_users ON (lawsuits_users.lawsuitID = ${lawsuitID} AND lawsuits_users.userID = users.id`)
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  },

  fetchMyList: ({ body }, res) => {
    const { userID } = body;
    db.raw(`SELECT * FROM lawsuits INNER JOIN lawsuits_users ON (lawsuits_users.userID = ${userID} AND lawsuits_users.lawsuitID = lawsuits.id)`)
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  }
};


