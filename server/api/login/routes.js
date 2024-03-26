const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ token: 'test1234' });
});

router.post('/', async (req, res) => {
  res.send({ token: 'test1234' });
});

module.exports = router;
