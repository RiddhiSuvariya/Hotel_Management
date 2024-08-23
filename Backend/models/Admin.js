import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    
    adminname: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobilenumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    adminemail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
   
    adminpassword: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
   
});



module.exports=mongoose.model("Admin",adminSchema)