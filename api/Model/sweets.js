const mongoose = require('mongoose')

const sweet = mongoose.Schema({
    name:String,
    imageUrl:String,
    category:String,
    price:String
})

module.exports= mongoose.model('sweet',sweet)