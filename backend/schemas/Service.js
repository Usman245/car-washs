// backend/schemas/Service.js

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  time: {
    type: String, // You can change this to a more appropriate data type if needed
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
