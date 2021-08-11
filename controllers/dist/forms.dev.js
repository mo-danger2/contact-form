"use strict";

var Form = require('../models/form.js');

module.exports = {
  create: create
};

function create(req, res) {
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Form.create({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            about: req.body.about
          }));

        case 3:
          res.status(200).json('ok. info added to DB!');
          console.log("my controller is being hit");
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}
//# sourceMappingURL=forms.dev.js.map
