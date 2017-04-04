var express = require('express'); // call express
var app = express(); // define app using express

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));

app.listen(3000, function () {
  console.log('App running on port '+ this.address().port);
});
