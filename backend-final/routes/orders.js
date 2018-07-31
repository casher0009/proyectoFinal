const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
//archivos
const multer = require('multer')


router.get('/orders', (req, res) => {
  Order.find()
      .then(orders => {
          return res.status(200).json(orders); //200: The request was fulfilled.                       
      })
      .catch(e => next(e))

});



router.post('/new', (req, res) =>{

  if(req.file) req.body.image = '/images/' + req.file.filename
  Phone.create(req.body)
      .then(phone => {
          return res.status(201).json(phone)
      })
      .catch(err => {
          return res.status(500).json(err)
      })

})
