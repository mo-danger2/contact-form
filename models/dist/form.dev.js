"use strict";

var mongoose = require('mongoose');

var formSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  about: String
}, {
  timestamps: true
});
module.exports = mongoose.model("Form", formSchema);
//# sourceMappingURL=form.dev.js.map
