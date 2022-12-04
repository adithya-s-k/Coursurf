const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  website: { type: [String], required: false },
  company: { type: [String], required: false },
  certificate: { type: [String], required: false },
  rating: { type: Number, required: false },
  hours: { type: Number, required: false },
  video: { type: String, required: false },
  link: { type: String, required: false },
});

module.exports = mongoose.model('courses', coursesSchema);
