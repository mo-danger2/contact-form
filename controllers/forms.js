const Form = require('../models/form.js');

module.exports = {
    create
}

async function create(req, res) {
    try {

      await Form.create({
          name: req.body.name,
          email: req.body.email, 
          number: req.body.number,
          about: req.body.about
        })
      
      res.status(200).json('ok. info added to DB!')
      console.log("my controller is being hit")
   } catch(err) {
      res.json(err);
   }
}