var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var multer = require('multer');
var awskeys = require('./aws/aws');
var compression = require('compression');
var multerS3 = require('multer-s3');
var aws = require('aws-sdk');
aws.config.update({
  secretAccessKey: awskeys.secretAccessKey,
  accessKeyId: awskeys.keyId,
  region: 'us-west-2'
});
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
const routes = require('./routes/routes.js');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./facebook/fb');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db/config');
const flash = require('flash');
const token = require('./jwt/jwt');
const User = require('./models/user');
var app = express();
var port = process.env.port || 8080;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
passport.use(new FacebookStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL
},
  (accessToken, refreshToken, profile, done) => {
    passport.photo = `https://graph.facebook.com/v2.8/${profile.id}/picture`;
    process.nextTick(() => {
      db.raw(`SELECT  * FROM users where username = ${Number(profile.id)}`)
        .then((result) => {
          if (result[0].length === 0) {
            db.raw(`INSERT INTO users VALUES (null, ${Number(profile.id)}, '${profile.displayName}', null)`)
              .then(() => {
                return done(null, profile);
              });
          } else {
            return done(null, profile);
          }
        });
    });
  }
));

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  (req, username, password, done) => {
    process.nextTick(() => {
      User.findByUsername(username, (result) => {
        if (result[0].length === 0) {
          bcrypt.genSalt(2, (err, salt) => {
            if (err) {
              console.log('Salt error ', err);
            }
            bcrypt.hash(password, salt, null, (err, hash) => {
              if (err) {
                console.log(err);
                return;
              }
              User.addUser(username, hash, req.body.displayname)
                .then((data) => {
                  passport.user = {id: data, displayname: req.body.displayname};
                  passport.token = token.tokenGenerator(data);
                  return done(null, username);
                });
            });
          });
        } else {
          // console.log('user existed')
          // return done(null, false, req.flash('signupMessage', 'User exited.'));
        }
      });
    });
  }
));

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  (req, email, password, done) => {
    User.findByUsername(email, (result) => {
      if (result[0].length === 0) {
        return done(null, false, req.flash('loginMessage', 'User not found.'));
      } else {
        result = JSON.parse(JSON.stringify(result[0]));
        bcrypt.compare(password, result[0].password, (err, resp) => {
          if (err) console.error(err);
          if (resp) {
            passport.user = {id: result[0].id, displayname: result[0].displayname};
            passport.token = token.tokenGenerator(result[0].id);
            console.log('resultttt : ', result[0]);
            return done(null, result[0]);
          } else {
            // return done(null, false, req.flash('loginMessage', 'Incorrect password.'))
          }
        });
      }
    });
  }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: 'ecmascriptElephant',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/src')));
app.use(express.static(path.join(__dirname, '/../node_modules/')));
app.use(compression({level: 9}));
var s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'smartfolio',
    key: function (req, file, cb) {
      console.log(req.headers)
      var string = `${req.headers.lawsuit} ${file.originalname}`;
      cb(null, string);
    }
  })
}).fields([{
  name: 'file', maxcount: 1
}]);
app.use(upload)
routes(app, passport);
app.listen(port, () => {
  console.log('Listening on port: 8080');
});
