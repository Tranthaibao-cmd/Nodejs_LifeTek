var express = require('express');
var router = express.Router();
var controllerLogin = require('../controllers/login');

router.get('/login',controllerLogin.Show);
router.post('/login',controllerLogin.Login);

router.get('/check',controllerLogin.Check,(req, res, next) => {res.redirect('/user')});

module.exports = router