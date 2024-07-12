const mongoose = require('mongoose')

const snacks = mongoose.Schema({
    name:String,
    imageUrl:String,
    category:String,
    price:String
})

module.exports= mongoose.model('snacks',snacks)