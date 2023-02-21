const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Infor = new Schema({
    Ten : {type :String, require :true},
    Gioitinh : {type :String},
    Ngaysinh : {type :Date,default : Date.now()},
    Diachi : {type :String},
    //Ngay : {type :String}
    
},
{
    timestamp: true,
});

module.exports =mongoose.model('Information',Infor);