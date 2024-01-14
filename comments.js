//create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//create database
const db = require('./queries');
//use bodyParser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//create route
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});
//create route
app.get('/comments', db.getComments);
//create route
app.get('/comments/:id', db.getCommentById);
//create route
app.post('/comments', db.createComment);
//create route
app.put('/comments/:id', db.updateComment);
//create route
app.delete('/comments/:id', db.deleteComment);
//start server
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});