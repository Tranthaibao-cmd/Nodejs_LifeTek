const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Infor = new Schema({
    Ten : {type :String, maxLength :255},
    Gioi_tinh : {type :String},
    Ngay_sinh : {type :Date},
    Dia_chi : {type :String}

});

module.exports =mongoose.model('Information',Infor);