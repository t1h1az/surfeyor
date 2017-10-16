const mongoose = require('mongoose');
const flashcard = require('./Flashcard');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  flashcards: [{
    type: Schema.Types.ObjectId,
    ref: 'flashcards'
  }]
});

var User = mongoose.model('user', UserSchema);

module.exports = User;
