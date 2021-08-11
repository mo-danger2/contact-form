"use strict";

var express = require('express');

var router = express.Router();

var formCtrl = require('../../controllers/forms');

router.post('/', formCtrl.create);
module.exports = router;
//# sourceMappingURL=forms.dev.js.map
