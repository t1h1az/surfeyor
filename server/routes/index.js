const express = require('express');
const usersController = require('../controllers/usersController');
const path = require("path");

const router = express.Router();

router.get('/signUp', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public','index.html'));
});

router.post('/signedUp', (req, res) => {
  usersController.createUser(req, res);
});

module.exports = router;
