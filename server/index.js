var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, '../static')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(port, function() {
  console.log('Express server listening on port ' + port + ' - ' + process.env.NODE_ENV + ' mode');
  console.log('Process ID:' + process.pid);
});
