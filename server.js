var express = require('express');
var app = express();

app.use(express.static('./public'));

// Sends down index view
app.get('/', function(req, res){
  res.sendFile( __dirname + "/views/index.html");
});

// Connects books API to allow for JSON service
var booksRoute = require('./routes/books');
app.use('/books', booksRoute);

var port = 8888;
app.listen(port, function(){
  console.log('Listening on port: ' + port);
});
