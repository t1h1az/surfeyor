const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
  title: String,
  content: String,
  tags: { type: [String], index: true }
});

var Flashcard = mongoose.model('flashcards', FlashcardSchema);

module.exports = Flashcard;
