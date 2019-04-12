const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login,
    getMyPrayers
  };
  
  async function signup(req, res) {
    const user = new User(req.body);
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token });
    } catch (err) {
      // For duplicate emails
      res.status(400).json(err);
    }
  }
  
  async function login(req, res) {
    try {
      const user = await User.findOne({email: req.body.email});
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    } catch (err) {
      return res.status(401).json(err);
    }
  }


async function getMyPrayers(req, res) {
  try{
    const prayers = await User.find({email: req.body.userEmail})
      .populate('prayers').then(res => {let userOb = res[0]; return userOb}).then(res => {return res.prayers})
      // .exec((err, prayer) => {let p = prayer[0]; p.prayers});
      // const userPrayers = user[0]
      // const prayers = userPrayers.prayers
      res.json(prayers);
      // console.log('This is prayer', prayers);
  } catch (err) {
    console.log('An err in controller!', err)
  }
}
  
  /*----- Helper Functions -----*/
  
  function createJWT(user) {
    return jwt.sign(
      {user},
      SECRET,
      {expiresIn: '24h'}
    );
  }