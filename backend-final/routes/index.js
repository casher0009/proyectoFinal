const express = require('express');
const router  = express.Router();
const path = require('path')

/* GET home page */
router.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
// res.send("OK")
});

module.exports = router;
