const db = require('../db/db.js');

module.exports = {
  fetch: (req, res) => {
    db.select().from('lawsuits').then(data => res.send(data));
  }
}
