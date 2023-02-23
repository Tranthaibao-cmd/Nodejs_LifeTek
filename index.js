const express = require('express');
const db = require('./app/configs/db');
const routes = require ('./app/routes/index');
const handlebars = require('express-handlebars');
//const hbs = require('hbs');
const path = require('path');


const app = express();
app.engine('hbs', handlebars.engine({
    extname :'.hbs'
}));
app.set('view engine', 'hbs');
// hbs.registerHelper('dateFormat', require('handlebars-dateformat'));
app.set('views',path.join(__dirname, './app/resources/views'));

db.connect();

app.use(express.json());

routes(app);
app.listen(3000)




// const http = require('http');
// const COURSES = [
//   {id : 1, name : 'node'},
//   {id : 2 , name : 'java'},
// ]

// const server = http.createServer((req, res) => {
//  // res.setHeader ('Content-Type', 'application/json');
//  res.writeHead(404,{
//   'Content-Type': 'application/json',
//  })
//   res.end(JSON.stringify({
//     success : false,
//     error :'Not Found',
//     data : null
//   }));
// })
// const PORT =3000;
// server.listen (PORT,()=> console.log(`Example app listening on port ${PORT}`));