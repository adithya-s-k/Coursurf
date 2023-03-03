const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // image: { type: String, required: true },
  provider: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Course', courseSchema);

// Path: pages\api\courses.js
