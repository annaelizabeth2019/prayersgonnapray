const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

