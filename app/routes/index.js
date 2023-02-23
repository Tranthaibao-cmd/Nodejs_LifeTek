const studencontroller = require('../controllers/Student');
const routerLogin = require('./Login');
const routerStudent = require('./Student');
function route(app){
    app.use('/',routerLogin);
    app.use('/user',routerStudent);
}
module.exports= route;