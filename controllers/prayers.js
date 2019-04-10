var Prayer = require('../models/prayer');

module.exports = {
  create,
  savePrayer,
  recentPrayers
};

  
async function savePrayer(req, res) {
  const prayer = new Prayer(req.body);
  try {
    await prayer.save();
  } catch (err) {
      res.status(400).json(err);
  }
}


async function create(req, res) {
  // console.log('prayer: ', req.body)
  // const prayer = new Prayer(req.body);
  try {
    await Prayer.create(req.body);
    Prayer.save();
    console.log(prayer)
    prayers(req, res);
  } catch (err) {
    res.json({err});
  }
}

async function recentPrayers(req, res) {
  console.log(req.body);
  const prayers = await Prayer.find({})
    .sort({timeStamps: -1})
    .limit(req.query.limit || 50);
  res.json(prayers);
}