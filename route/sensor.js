const phCont = require('../controller/sensor');
const router = require('express').Router();

router.get('/', (req, res) => {
  phCont.getdata()
  .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  phCont.input(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
