"use strict";

var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');

var app = express();

require('dotenv').config(); // connect to mongoDB


require('./config/database.js');

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express["static"](path.join(__dirname, 'build'))); // Put API routes here, before the "catch all" route

app.use('/api/forms', require('./routes/api/forms.js')); // The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Express app running on port ".concat(port));
});
//# sourceMappingURL=server.dev.js.map
