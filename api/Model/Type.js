const mongoose = require('mongoose')

const type = mongoose.Schema({
    type:String,
    imageUrl:String
})
module.exports = mongoose.model('tpes',type);