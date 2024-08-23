const express = require("express");
const adminRouter = express.Router();
const Admin =require('../models/Admin');
const mongoose = require("mongoose")

adminRouter.post('/login', async (req, res) => {
    const { adminName, password } = req.body;
    const admin = await Admin.findOne({ adminName, password });
    if (admin) {
      res.json({ message: 'Admin login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  
  adminRouter.get('/login',async(req,res)=>{
    const admin= await Admin.find()
    res.send(admin);
  })

  // adminRouter.post('/signup', async (req, res) => {
  //   const { adminName, password } = req.body;
  //   const newAdmin = new Admin({ adminName, password });
  //   await newAdmin.save();
  //   res.json({ message: 'Admin signed up successfully' });
  // });

  // adminRouter.get('/signup',async(req,res)=>{
  //   const admin= await Admin.find()
  //   res.send(admin);
  // })

  module.exports = adminRouter;