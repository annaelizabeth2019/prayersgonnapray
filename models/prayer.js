const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prayerSchema = new Schema({
  higherPower: String,
  text: String,
  location: {
    lat: Number,
    lng: Number
  },
  user: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Prayer', prayerSchema);