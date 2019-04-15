const Prayer = require('../models/prayer');
const User = require('../models/user');

module.exports = {
  create,
  savePrayer,
  recentPrayers,
  updatePrayer,
  deletePrayer,
  getOnePrayer
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
    .limit(21);
  res.json(prayers);
}

async function updatePrayer(req, res) {
  await Prayer.findByIdAndUpdate(req.params.id, { text: req.body.text,  higherPower: req.body.higherPower}).catch(err => console.log(err));
}

async function deletePrayer(req, res) {
  console.log('made it to the controller!')
  await Prayer.findByIdAndRemove(req.body.prayerId).then(function(prayer) {
    res.status(200).json(prayer).catch(err => console.log(err));
  });
}

async function getOnePrayer(req, res) {
  await Prayer.findById(req.params.id).then(function(prayer) {
    res.status(200).json(prayer).catch(err => console.log(err));
  });
}