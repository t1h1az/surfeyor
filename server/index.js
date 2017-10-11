const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const app = express();

passport.use(new GoogleStrategy());



// starting with oAuth authentication
app.post(
  '/login',
  passport.authenticate(
    'local',
    { successRedirect: '/',
      failureRedirect: '/login'
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
