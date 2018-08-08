const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const Provider = require("../models/Provider");
const User = require("../models/User")

function IsAdmin(req, res, next) {
  if (req.isAuthenticated() && req.role === "ADMIN") {
    return next();
  } else {
    res.json({ message: "no tienes permiso" });
  }
}


router.get('/provider/:id',(req,res,next)=>{
  Provider.findById({_id:req.params.id}).populate('orders')
  .then(provider=>{
    res.status(200).json(provider)
  })
  .catch(e=>next(e))

} )

router.get('/provider',(req, res) => {
  Provider.find({user:req.user._id})
  .then(orders=>{
      res.send(provider)
  })
  .catch(e=>next(e))
});

router.put('/provider/:id', (req, res, next) => {
  Provider.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(provider => {
          return res.status(202).json(provider)
      })
      .catch(err => {
          return res.status(404).json(err);
      })
});


router.delete('/provider/:id', (req, res, next) => {
  Provider.findByIdAndRemove(req.params.id)
.then(provider=>{
  res.status(200).json(provider)
})
.catch(e=>{
  res.status(500).json({message:"No se elimino correctamente"})
  next(e)
})
});


router.post('provider/new', IsAdmin,(req, res) =>{
  req.body.user = req.user._id;
  // if(req.file) req.body.image = '/images/' + req.file.filename
  Provider.create(req.body)
      .then(provider => {

          console.log(provider)
          return res.status(201).json(provider)
          
      })
      .catch(err => {
          return res.status(500).json(err)
      })

})



module.exports = router;
