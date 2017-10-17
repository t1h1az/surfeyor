const mongoose = require('mongoose');
const flashcard = require('./Flashcard');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters'//gives information how this object should be validated
    },
    required: [true, 'Name is required'],
    unique: true
  },
  firstname: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Firstname must be longer than 2 characters'//gives information how this object should be validated
    },
    required: [true, 'Firstname is required']
  },
  lastname: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Lastname must be longer than 2 characters'//gives information how this object should be validated
    },
    required: [true, 'Lastname is required']
  },
  password: {
    type: String,
    validate: {
      validator: (password) => password.length > 2,
      message: 'Password must be longer than 2 characters'//gives information how this object should be validated
    },
    required: [true, 'Password is required']
  },
  flashcards: [{
    type: Schema.Types.ObjectId,
    ref: 'flashcards'
  }]
});

var User = mongoose.model('users', UserSchema);

module.exports = User;
