const express = require('express');
const db = require('./app/configs/db');
const routes = require ('./app/routes/student');

db.connect();

const app = express();
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