const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set("view engine", "ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/index", { "title": title });
});

//users index is our list page
app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index', {
    title: title,
    users: data
  });
});

app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
    title: title,
    user: data[--id]
  });
});

app.get('/hiking', (req, res) => {
  let title = "Hiking";
  res.render("pages/hiking", { "title": title });
});

app.get('/soccer', (req, res) => {
  let title = "Soccer";
  res.render("pages/soccer", { "title": title });
});

app.get('/traveling', (req, res) => {
  let title = "Traveling";
  res.render("pages/traveling", { "title": title });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
});