var Prayer = require('../models/prayer');

module.exports = {
  create,
  recentPrayers
};

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    await prayer.create(req.body);
    prayers(req, res);
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