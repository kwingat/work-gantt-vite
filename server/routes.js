const express = require('express');
const router = express.Router();

const login = require('./api/login');

router.use('/api/login', login);

module.exports = router;
