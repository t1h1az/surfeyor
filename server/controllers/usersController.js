const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
  createUser: function createUser(req, res) {

    const joe = new User({
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
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
