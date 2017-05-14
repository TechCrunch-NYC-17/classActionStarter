const db = require('../db/config.js');

module.exports = {
  fetch: (req, res) => {
    db.select().from('lawsuits').then(data => res.send(data));
  },

  post: ({ body }, res) => {
    const { title, category, description } = body;
    db.insert({ title, category, description }, 'id')
      .into('lawsuits')
      .then(() => res.status(201).end());
  }
};

