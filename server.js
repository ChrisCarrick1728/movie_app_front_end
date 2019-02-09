var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000, function () {
  console.log('Server listing on port %d in %s mode', this.address.port, app.settings.env)
};
app.listen(port);

console.log('server started ' + port);
