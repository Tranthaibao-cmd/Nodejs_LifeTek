const studencontroller = require('../controllers/Student');
var controllerLogin = require('../controllers/login');
var express = require('express');
const router = express.Router();

    router.get('/',controllerLogin.Check,studencontroller.index);
      
    router.get('/user/:Ten', studencontroller.Detail);
      
    router.post('/Add',studencontroller.Add);

    router.put('/Edit/:id',studencontroller.Update);

    router.delete('/Delete/:id',studencontroller.Delete);

module.exports= router;