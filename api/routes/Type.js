const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const typeScema = require('../Model/Type')


router.post('/',(req,res)=>{
    const type = new typeScema({
        type:req.body.type,
        imageUrl:req.body.imageUrl
    });
    type.save()

    .then(result=>{
        res.status(200).json({
            type:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


//get all types

router.get('/get-all-type',(req,res)=>{
    typeScema.find()

    .then(result=>{
        res.status(200).json({
            type:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

//delete types
router.delete('/delete-type',(req,res)=>{

})


//get all types by category 
router.get('/category/:category',(req,res)=>{
    typeScema.find()
    
    .then(result=>{
        res.status(200).json({
            type:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


module.exports = router;