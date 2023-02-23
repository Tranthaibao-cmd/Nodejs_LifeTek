const studencontroller = require('../controllers/Student');
var express = require('express');
const router = express.Router();

    router.get('/',studencontroller.index);
      
    router.get('/user/:Ten', studencontroller.Detail);
      
    router.post('/Add',studencontroller.Add);

    router.put('/Edit/:id',studencontroller.Update);

    router.delete('/Delete/:id',studencontroller.Delete);

module.exports= router;