var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 4000;

var data = require('./game-data.json');

var player = require('./player.json');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));


app.get('/', function(req, res, next) {
    var gameData = require('./game-data.json');
    var nameData = require('./player.json');
    res.status(200).render('homePage', {
      gameData:gameData,
      nameData:nameData
      
    });
});

app.get('*', function(req, res) {
  res.status(404).render('404', {});
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});