const { default: mongoose } = require('mongoose');
const singupSchema = require('../Model/signup')
const express = require('express');
const router = express.Router();

//adding signup

router.post('/', (req, res) => {
    const user =new singupSchema({
        _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    phone:req.body.phone,
    password:req.body.password
    });user.save()
    .then(result => {
        res.status(200).json({
        user: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            Error: err
        });
    });
});

module.exports = router;
