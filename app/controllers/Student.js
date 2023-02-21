const infor = require('../models/student');
const page_size = 4;
const {multiToObject,Object} = require('../ulti/mongoose')

class StudentController {
    //Get :/
    index(req,res,next) {
        // infor.find({},function(err,Infor){
        //     if(!err) {res.json(Infor)}
        //     else{next(err)}});

        var page = req.query.page ;
        //phan trang
        
        
        if(page){
            page = parseInt(page);
            var skip = (page -1 )* page_size;
            infor.find({})
            .skip(skip)
            .limit(page_size)
            .then(Infor => {
                //Infor.map((InFor) => InFor.Ngay = InFor.Ngaysinh.toLocaleDateString());
                // console.log(Infor);
                res.render('home',{Infor : multiToObject(Infor)});
            })
            .catch(
                error =>{res.status(500).json('loi serve')}
                );

        }else{
            //get all
            infor.find({})
            .then(Infor => res.render('home',{Infor : multiToObject(Infor)}))
            .catch(
                error =>{res.status(500).json('loi serve')}
            );  
        }
    };
    // details get by :Ten 
    Detail (req, res, next) {
        infor.findOne({Ten : req.params.Ten})
        .then((Infor)=> {
            res.render('Details',{Infor : Object(Infor)});
        })
        .catch(next);
    }
    // Post
    Add (req, res, next) {
        const add = new infor(req.body);
        if(add.Ngaysinh>= Date.now()){
            res.json("ngay sinh khong hop le");

        }else{     
            add.save()
                .then(()=>res.send("successfull"))
                .catch(err => {
                    res.status(400).json('loi nguoi nhap')
                }); 
        }
    }
    // Update
    Update (req, res, next) {
       infor.updateOne({_id : req.params.id},req.body)
        .then(()=> res.json('update thanh cong'))
        .catch(next);

    }
    //Delete
    Delete (req, res, next) {
        infor.deleteOne({_id : req.params.id})
            .then(()=> res.json('xoa thanh cong'))
            .catch(next);
    }
}
module.exports = new StudentController;