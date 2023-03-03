const mongoose = require('mongoose');

const sensorModel = mongoose.Schema({
  nilai: {
    type: String,
  },
  keterangan: {
    type: String,
  },
});

module.exports = mongoose.model('ph', sensorModel);
