const express = require("express");
const router=express.Router();
const user=require("../models/user")
router.post("/login",async(req,res)=>{

    const newuser= new user({Name:req.body.Name,email:req.body.email,password:req.body.password})
    try{
        const user= await newuser.save()
        res.send({message:"User login siccess",email:newuser.email})


    }
    catch(error){
        return res.status(400).json({error});
    }

});

// router.post("/login",async(req,res)=>{
//     const {email,password}=req.body
//     try{
//         const user= await user.findOne({email : email,password:password})
//     }
//     catch(error){
//         return res.status(400).json({error});
//     }
// })
module.exports=router