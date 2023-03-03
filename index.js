const express = require('express');
const mongoose = require('mongoose');
const db = require('./db/db');
const cors = require('cors')
// const { router: routeWorker } = require('./controller/app');
const app = express();

app.use(cors())

app.use(express.json({
  extended: true,
  limit: '20mb'
}))
app.use(express.urlencoded({
  extended: true,
  limit: '20mb'
}))

mongoose
  .connect(db.mongoUrl)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.json({
    msg: 'testing',
  });
});

app.use('/data', require('./route/sensor'));

// app.use('worker', routeWorker);

app.listen(5000, () => {
  console.log('server runn..');
});
