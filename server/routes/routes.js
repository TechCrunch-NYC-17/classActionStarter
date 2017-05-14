const lawsuits = require('../controllers/lawsuits');

module.exports = (app) => {
  app.get('/fetchlawsuits', lawsuits.fetch);
}
