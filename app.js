const express = require('express');
// const mysql = require('mysql');

const app = express();
app.set('view engine', 'ejs')


app.get('/', (req, res) =>
{
  let name = "rizki";
  res.render('hello', { name: name })
});


app.listen(8080);
