const express =require('express')
const  router = express.Router()
const mongoose = require('mongoose')
const snack_Schema = require('../Model/snacks')

// post desert , shake and snacks
router.post('/',(req,res)=>{
    const snack = new snack_Schema({
        name:req.body.name,
        imageUrl:req.body.imageUrl,
        category:req.body.category,
        price:req.body.price
    });
    snack.save()

    .then(result=>{
        res.status(200).json({
            snack:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


//get all snacks
router.get('/get-all-snack',(req,res)=>{
    snack_Schema.find()
    
    .then(result=>{
        res.status(200).json({
            snack:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


//get snacks by category
router.get('/category/:category',(req,res)=>{
    snack_Schema.find({category:req.params.category})
    .then(result=>{
        res.status(200).json({
            snack:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

module.exports = router;