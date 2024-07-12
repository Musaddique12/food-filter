const express =require('express')
const  router = express.Router()
const mongoose = require('mongoose')
const sweet_Schema = require('../Model/sweets')

// post desert , shake and sweets
router.post('/',(req,res)=>{
    const sweet = new sweet_Schema({
        name:req.body.name,
        imageUrl:req.body.imageUrl,
        category:req.body.category,
        price:req.body.price
    });
    sweet.save()

    .then(result=>{
        res.status(200).json({
            sweet:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


//get all sweets
router.get('/get-all-sweet',(req,res)=>{
    sweet_Schema.find()
    
    .then(result=>{
        res.status(200).json({
            sweet:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


//get sweets by category
router.get('/category/:category',(req,res)=>{
    sweet_Schema.find({category:req.params.category})
    .then(result=>{
        res.status(200).json({
            sweet:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

module.exports = router;