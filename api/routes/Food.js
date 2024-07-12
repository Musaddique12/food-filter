const foodScema = require('../Model/food')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


router.post('/',(req,res)=>{
    const food = new foodScema({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        category:req.body.category,
        type:req.body.type,
        price:req.body.price,
        imageUrl:req.body.imageUrl
    });food.save()

    .then(result=>{
        res.status(200).json({
            food:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            ERROR : err
        })
    })
})

//get all blog
router.get('/food',(req,res)=>{

    foodScema.find()
    .select('_id name category type price imageUrl')

    .then(result=>{
        res.status(200).json({
            food:result
        })
    })

    .catch(err=>{ 
        res.status(500).json({
            err:err
        })
    })
})


//get food by category

router.get('/category/:category',(req,res)=>{
    foodScema.find({category:req.params.category})
    .select('_id name category type price imageUrl')

    .then(result=>{
        res.status(200).json({
            food:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


//get food by type

router.get('/type/:type',(req,res)=>{
    foodScema.find({type:req.params.type})
    .select('_id name category type price imageUrl')

    .then(result=>{
        res.status(200).json({
            food:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})


//get food by category and type

router.get('/:category/:type',(req,res)=>{
    foodScema.find({category:req.params.category,type:req.params.type})

    .select('_id name category type price imageUrl')

    .then(result=>{
        res.status(200).json({
            food:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

//update food by id
router.put('/update/:id',(req,res)=>{
    foodScema.updateOne({_id:req.params.id},req.body)

    .then(result=>{
        res.status(200).json({
            food:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

//delete food  by id
router.delete('/delete/:id',(req,res)=>{
    foodScema.deleteOne({_id:req.params.id},req.body)

    .then(result=>{
        res.status(200).json({
            food:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

module.exports = router;