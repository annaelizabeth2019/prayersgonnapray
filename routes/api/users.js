const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
// router.get('/index', usersCtrl.index)
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
router.post('/yourprayers', usersCtrl.getMyPrayers);

/*----- Helper Functions ------*/




module.exports = router;