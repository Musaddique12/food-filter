const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    name:String
});

module.exports = mongoose.model('Blooooogooooo', blogSchema);
