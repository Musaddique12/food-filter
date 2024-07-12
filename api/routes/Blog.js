const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../Model/Blog'); // Check if this should be '../models/Blog' instead
const router = express.Router();

// POST blog by admin
router.post('/', (req, res) => {
    const newBlog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        name:req.body.name
    });
    newBlog.save()
    .then(result => {
        res.status(200).json({
            new_Blog: result
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
