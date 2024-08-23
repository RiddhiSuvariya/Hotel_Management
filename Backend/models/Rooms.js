const mongoose =require("mongoose");
 
const schema =mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    maxcount:{
        type:Number,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
    rentperday:{
        type:Number,
        require:true
    },
    img:[],
    // currentbooking:[],
    type:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model("Room",schema)