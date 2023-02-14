const studencontroller = require('../controllers/Student');

function route(app){
    app.get('/', studencontroller.index);
      
    app.get('/:Ten', studencontroller.Detail);
      
    app.post('/Add',studencontroller.Add);

    app.put('/Edit/:id',studencontroller.Update);

    app.delete('/Delete/:id',studencontroller.Delete);
}
module.exports= route;