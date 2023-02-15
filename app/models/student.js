const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Infor = new Schema({
    Ten : {type :String, maxLength :255},
    Gioitinh : {type :String},
    Ngaysinh : {type :Date},
    Diachi : {type :String}

});

module.exports =mongoose.model('Information',Infor);