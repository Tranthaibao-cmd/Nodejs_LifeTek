const infor = require('../models/student');


class StudentController {
    //Get :/
    index(req,res,next) {
        // infor.find({},function(err,Infor){
        //     if(!err) {res.json(Infor)}
        //     else{next(err)}});

        infor.find({})
        .then(Infor => res.json(Infor))
        .catch(next);  
    };
    // get by :Ten 
    Detail (req, res, next) {
        infor.findOne({Ten : req.params.Ten})
        .then((Infor)=> {
            res.json(Infor);
        })
        .catch(next);
    }
    // Post
    Add (req, res, next) {
        const add = new infor(req.body);
        add.save()
            .then(()=>res.send("successfull"))
            .catch(next); 
    }
    // Update
    Update (req, res, next) {
       infor.updateOne({_id : req.params.id},req.body)
        .then(()=> res.redirect("/"))
        .catch(next);

    }
    //Delete
    Delete (req, res, next) {
        infor.deleteOne({_id : req.params.id})
            .then(()=> res.redirect("/"))
            .catch(next);
    }
}
module.exports = new StudentController;