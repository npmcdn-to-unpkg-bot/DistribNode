var express = require('express');

var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('/src/views'));

app.listen(port, function(err){
  console.log('running server on port ' + port);
})
//this is a comment to test the serve
