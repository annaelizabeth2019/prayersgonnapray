const express = require('express');
const router = express.Router();
const prayersCtrl = require('../../controllers/prayers');


router.get('/', prayersCtrl.recentPrayers);
router.get('/prayerboard', prayersCtrl.recentPrayers);
router.get('/:id', prayersCtrl.getOnePrayer);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, prayersCtrl.create);
router.put('/:id', checkAuth, prayersCtrl.updatePrayer);
router.delete('/delete', checkAuth, prayersCtrl.deletePrayer);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;