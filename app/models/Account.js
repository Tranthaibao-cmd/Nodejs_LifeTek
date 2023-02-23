const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
    Username : {type :String, require :true},
    Password : {type :String, require :true,minLength :6},   
},
{
    collection : "account",
    timestamp: true,
});

module.exports =mongoose.model('account',account);