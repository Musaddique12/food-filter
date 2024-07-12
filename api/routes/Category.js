const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const categorySchema = require('../Model/category')
const category = require('../Model/category')

router.post('/',(req,res)=>{
    const category = new categorySchema({
        category:req.body.category,
        imageUrl:req.body.imageUrl,
        type:req.body.type
    });
    category.save()

    .then(result=>{
        res.status(200).json({
            category:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


// get all category

router.get('/get-all-category',(req,res)=>{
    categorySchema.find()
    .then(result=>{
        res.status(200).json({
            category:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

//update by id
router.put('/update/:id',(req,res)=>{
    categorySchema.updateOne({_id:req.params.id},req.body)

    .then(result=>{
        res.status(200).json({
            category:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

module.exports = router