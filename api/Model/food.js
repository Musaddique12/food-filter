const mongoose = require('mongoose');

const foodScema = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:String,
    category:String,
    type:String,
    price:String,
    imageUrl:String,
})
module.exports = mongoose.model('food',foodScema)