const express = require('express');
const router = express.Router();
const prayersCtrl = require('../../controllers/prayers');


router.get('/', prayersCtrl.recentPrayers);
router.get('/prayerboard', prayersCtrl.recentPrayers);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, prayersCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;