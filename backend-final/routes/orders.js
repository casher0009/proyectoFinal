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

router.get('/user/:id',(req,res,next)=>{
  User.findById({_id:req.params.id}).populate('orders')
  .then(user=>{
    res.status(200).json(user)
  })
  .catch(e=>next(e))

} )

router.get('/orders',isAuthenticated, (req, res) => {
  Order.find({user:req.user._id})
  .then(orders=>{
      res.send(orders)
  })
  .catch(e=>next(e))
});

router.put('/orders/:id', (req, res, next) => {
  Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(order => {
          return res.status(202).json(order)
      })
      .catch(err => {
          return res.status(404).json(err);
      })
});

//remove vacancie

router.delete('/orders/:id', (req, res, next) => {
  console.log(req.params.id , "id para reborrar")
Promise.all([
  Order.findByIdAndRemove(req.params.id),
  User.findOneAndUpdate({orders: req.params.id},{$pull:{orders: req.params.id}},{new:true})
])
.then(results=>{
  res.status(200).json(results)
})
.catch(e=>{
  res.status(500).json({message:"No se elimino correctamente"})
  next(e)
})
});


router.post('/new', (req, res) =>{
  req.body.user = req.user._id;
  // if(req.file) req.body.image = '/images/' + req.file.filename
  Order.create(req.body)
      .then(order => {
        User.findByIdAndUpdate(req.user._id, {$push:{orders:{ $each:[order._id], $position:0 }}},{new:true})
        .then(()=>{

          console.log(order)
          return res.status(201).json(order)
        });
          
      })
      .catch(err => {
          return res.status(500).json(err)
      })

})



module.exports = router;
