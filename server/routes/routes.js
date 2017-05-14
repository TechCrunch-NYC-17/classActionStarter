const lawsuits = require('../controllers/lawsuits');
const token = require('../jwt/jwt');
module.exports = (app, passport) => {
  app.get('/fetch/lawsuits', lawsuits.fetch);

  app.post('/post/lawsuit', lawsuits.post);

  app.post('/post/participate', lawsuits.participate);

  app.post('/fetch/mylist', lawsuits.fetchMyList);

  app.post('/signup', passport.authenticate('local-signup', {
    failureRedirect: '/',
    failureFlash: true
  }),
    (req, res) => {
      res.send({ token: passport.token, user: passport.user, picture: `https://robohash.org/${passport.user.displayname}` });
    });

  app.post('/login', passport.authenticate('local-login', {
    failureRedirect: '/#/'
  }),
    (req, res) => {
      console.log(passport.user);
      res.send({ token: passport.token, user: passport.user, picture: `https://robohash.org/${passport.user.displayname}` });
    });

  app.post('/tokenauth', (req, res) => {
    if (token.verifyToken(req.body.token) !== undefined) {
      res.send({ validToken: true });
    } else {
      res.send({ validToken: false });
    }
  });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    authType: 'rerequest',
    failureRedirect: '/login'
  }), (req, res) => {
    passport.user = req.user;
    passport.token = token.tokenGenerator(req.user.id);
    res.redirect('/#/auth');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/', (req, res) => {
    res.redirect('/#/');
  });

  app.get('/auth', (req, res) => {
    res.redirect('/#/auth');
  });

  app.get('/get-info', (req, res) => {
    res.send({ token: passport.token, user: passport.user, picture: passport.photo });
  });
};
