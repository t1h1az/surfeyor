const mongoose = require('mongoose');

mongoose.promise = global.promise;

before((done) => {
  mongoose.connect('mongodb://localhost:27017/secondAuthTrainingTest');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('warning', error);
    });
});

beforeEach((done) =>{
  const { users, flashcards } = mongoose.connection.collections;  // simply loads all collections into consts
  users.drop(() => {
    flashcards.drop(() => {
      done();
    });
  });
});
