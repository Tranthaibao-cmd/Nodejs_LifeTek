const account = require('../models/Account');
const jwt = require('jsonwebtoken');

class LoginController {
    Show(req, res, next) {
        res.render('login');
    }
    Login(req, res, next) {
       var username = req.body.username ;
       var password = req.body.password;

       account.findOne({ username: username, password: password})
       .then(data => {
        if(data){
            var token = jwt.sign({_id : data._id},'pass'); 
            res.json({
                message :'dang nhap thanh cong',
                token :token
            });
        }
        else{
            res.json('that bai');
        }
       })
       .catch(err => {
        res.status(500).json('loi serve')
       })
    }
    Check(req, res, next){
        try{
            var token = req.Cookies.token
            var ketqua =jwt.verify(token,'pass');
            if(ketqua){
                next();
            }
        }
        catch(err) {
            return res.redirect('/login');
        }

    }
}
module.exports = new LoginController;