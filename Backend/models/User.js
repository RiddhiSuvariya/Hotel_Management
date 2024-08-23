const mongoose =require("mongoose");

const userSchema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:false
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timeatamps:true
})

const userModel =mongoose.model('user',userSchema)
module.exports=userModel

