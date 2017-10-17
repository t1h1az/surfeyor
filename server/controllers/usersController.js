const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
  createUser: function createUser(req, res) {
    // res.send('your home');
    console.log(req.body.username);
    console.log(req.body.password);
    var joe = new User({
      username: req.body.username,
      password: req.body.password
    });
    console.log(joe);
    console.log(req.body.password);

    joe.save()
      .then(() => console.log('saved to database'));

    res.redirect('/signUp');
  },
  receiveUser: function receiveUser() {},
  updateUser: function updateUser() {},
  deactivateUser: function deactivateUser() {}
};
