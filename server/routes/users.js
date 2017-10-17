const express = require('express');
const usersController = require('../controllers/usersController');
const path = require("path");

const userRoutes = express.Router();

userRoutes.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public','index.html'));
});

userRoutes.get('/signUp', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public','index.html'));
});

userRoutes.post('/signedUp', (req, res) => {
  usersController.createUser(req, res);
});

module.exports = userRoutes;
