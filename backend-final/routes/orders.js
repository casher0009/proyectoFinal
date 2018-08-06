const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const User = require("../models/User");

//archivos
const multer = require('multer')

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    return next();
  } else {
    res.json({ message: "no tienes permiso" });
  }
}


router.get('/orders',isAuthenticated, (req, res) => {
  Order.find({user:req.user._id})
  .then(orders=>{
      res.send(orders)
  })
  .catch(e=>next(e))
});


router.post('/new', isAuthenticated, (req, res) =>{
  req.body.user = req.user._id;
  // if(req.file) req.body.image = '/images/' + req.file.filename
  Order.create(req.body)
      .then(order => {
        User.findByIdAndUpdate(req.user._id, {$push:{orders:order._id}})
        .then(()=>{
          return res.status(201).json(order)
        });
          
      })
      .catch(err => {
          return res.status(500).json(err)
      })

})



module.exports = router;
