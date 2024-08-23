const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id:mongoose.ObjectId,
    Name:String,
    description:String,
    maxcount:Number,
    phonenumber:Number,
    rentperday:Number,
    type:Number,
    img:String
})

module.exports = new mongoose.model('newRoom',schema);