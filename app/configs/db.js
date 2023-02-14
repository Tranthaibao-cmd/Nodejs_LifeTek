const mongoose = require('mongoose');
async function connect(){
 try {
    await mongoose.connect('mongodb://localhost:27017/Manages_students',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
    console.log("db successfully");
 }
 catch(error){
    console.log("conect failure");
 }
}
module.exports= {connect};