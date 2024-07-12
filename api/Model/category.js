const mongoose = require('mongoose')

const category = mongoose.Schema({
    category:String,
    imageUrl:String,
    type:String
})

module.exports = mongoose.model('category',category)