/* eslint-disable no-undef */

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('express').json;
const compression = require('compression');
const routes = require('./routes');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const app = express();

// import { MongoClient } from 'mongodb';
const publicPath = path.resolve(__dirname, '../public');
app.use(compression());
app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

process.on('SIGINT', () => {
  process.exit();
});

process.on('exist', () => {
  process.exit();
});

mongoose.set('strictQuery', false);
const main = async () => {
  const uri = 'mongodb://0.0.0.0:27017/test';
  await mongoose.connect(uri);
};
main().catch(console.error);

module.exports = app;
