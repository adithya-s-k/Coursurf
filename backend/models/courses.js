const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  website: { type: [String], required: true },
  company: { type: [String], required: true },
  certificate: { type: [String], required: true },
  rating: { type: Number, required: true },
  hours: { type: Number, required: true },
  video: { type: String, required: false },
  link: { type: String, required: true },
});

module.exports = mongoose.model('courses', coursesSchema);
