/* eslint-disable no-undef */

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('express').json;
const compression = require('compression');
const routes = require('./routes');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { username, password } = require('./config.js');

console.log({ username, password });
const uri = `mongodb+srv://${username}:${password}@work-org.2naexlw.mongodb.net/`;

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
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

module.exports = app;
