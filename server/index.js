const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

//importing routes
const index = require('./routes/index');
const users = require('./routes/users');
const flashcard = require('./routes/flashcards');
const library = require('./routes/library');

mongoose.Promise = global.Promise;

// makes post data accessable via req object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connectiong to lacal data storage
mongoose.connect('mongodb://localhost:27017/secondAuthTraining');

// app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes'));

//==================================== set up template engine =================//
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log('running secondAuthTraining on Port: ' + PORT);
});
