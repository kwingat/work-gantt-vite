/* eslint-disable no-undef */
const mongoose = require('mongoose');
const { catchErrorHandler } = require('../utils/errorHandler');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => catchErrorHandler(err));
