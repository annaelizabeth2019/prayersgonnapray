const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

//this is enough salt for security 
const SALT_ROUNDS = 6;

//Let's define the user
const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  prayers: [{type: mongoose.Schema.Types.ObjectId,
    ref: 'Prayer'}]
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // delete the user's password and save the json
    delete ret.password;
    return ret;
  }
});

//hash the user password
userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replaces the password with the hash
    user.password = hash;
    next();
  });
});

//check if password is correct
userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};


module.exports = mongoose.model('User', userSchema);