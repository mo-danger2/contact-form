const express = require('express');
const router = express.Router();
const formCtrl = require('../../controllers/forms');

router.post('/', formCtrl.create)



module.exports = router;