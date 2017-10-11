const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const app = express();

// passport.use(new GoogleStrategy());

//deploy a local strategy
passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({username: username}, function(err, user){
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.initialize();
passport.session();

// starting with oAuth authentication
app.post('/login',
  passport.authenticate(
    'local',
    { successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: 'Login attempt successful'
    }
  ),
  function returnUser(req, res) {
    res.redirect('/user' + req.user.username);
  }
);

app.get('/', (req, res) => {
  res.send({fucking: 'shit'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
