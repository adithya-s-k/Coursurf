const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: [String], required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model('courses', coursesSchema);
