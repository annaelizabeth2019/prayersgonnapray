const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prayerSchema = new Schema({
  higherPower: String,
  prayer: String,
  location: {
    lat: Number,
    lng: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Prayer', prayerSchema);