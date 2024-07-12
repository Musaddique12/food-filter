const mongoose = require('mongoose')

const signupSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:String,
    phone:String,
    password:String
});
module.exports = mongoose.model('Singup',signupSchema)