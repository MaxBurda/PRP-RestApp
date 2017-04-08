const express = require('express');
const router = express.Router();

//auth handlers for various strategies
const insta = require('./insta');
const gl = require('./gl');
const local = require('./local');
const passport = require('passport');
const userModel = require('models/user');

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

//auth routes
router.use('/insta', insta);
router.use('/gl', gl);
router.use('/local', local);

router.get('/', function (req, res) {
	res.send('Auth route')
});

module.exports = router;
