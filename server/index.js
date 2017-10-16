const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usersController = require('./controllers/usersController');
const router = require('./routes');

const app = express();

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Connectiong to lacal data storage
mongoose.connect('mongodb://localhost:27017/secondAuthTraining');
// passport.use(new GoogleStrategy());

//deploy a local strategy
// passport.use(new LocalStrategy(
//   function(username, password, done){
//     User.findOne({username: username}, function(err, user){
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));
//
// passport.initialize();
// passport.session();

app.use(express.static(__dirname + '/public'));

app.use('/routes', router);

app.get('/signUp', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/signedUp', (req, res) => {
  usersController.createUser(req, res);
});

// starting with oAuth au)thentication
// app.post('/login',
//   passport.authenticate(
//     'local',
//     { successRedirect: '/',
//       failureRedirect: '/login'
//     }
//   ),
//   function returnUser(req, res) {
//     console.log(req.user);
//     res.redirect('/user' + req.user.username);
//   }
// );

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log('running secondAuthTraining on Port: ' + PORT);
});
