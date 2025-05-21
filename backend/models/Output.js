const mongoose = require('mongoose');

const OutputSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Output', OutputSchema);