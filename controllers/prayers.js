const Prayer = require('../models/prayer');
const User = require('../models/user');

module.exports = {
  create,
  savePrayer,
  recentPrayers,
  edit,
};

  
async function savePrayer(req, res) {
  console.log(req.body)
  const prayer = new Prayer(req.body);
  try {
    await prayer.save();
  } catch (err) {
      res.status(400).json(err);
  }
}


async function create(req, res) {
  const user = req.body.user
  const prayer = req.body;
  try {
    Prayer.create(req.body).then( (res) => User.findOneAndUpdate({email: user}, { $push : {prayers: res.id} })).catch(console.log(err));
  } catch (err) {
    res.json({err});
  }
}

async function recentPrayers(req, res) {
  const prayers = await Prayer.find({})
    .sort({timeStamps: -1})
    .limit(req.query.limit || 50);
  res.json(prayers);
}

async function edit(req, res) {
  const query = {id: req.body.id}
  await Prayer.updateOne(query, { text: req.body.text,  higherPower: req.body.higherPower}).catch(err => console.log(err));
}