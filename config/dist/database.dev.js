"use strict";

var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
var db = mongoose.connection;
db.on('connected', function () {
  console.log("Connected to ".concat(db.name, " at ").concat(db.host, ":").concat(db.port));
});
//# sourceMappingURL=database.dev.js.map
