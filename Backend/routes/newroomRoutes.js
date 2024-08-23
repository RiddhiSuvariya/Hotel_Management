const express = require("express");
const catRouter = express.Router();
const Cat = require('../Models/newrromschema');
// const auth = require('../middlewares/auth')
const mongoose = require("mongoose")

catRouter.get('/', async (req, res) => {
    // Cat.find().then((resData)=>{
    //     res.send(resData);
    // })
    const newroom = await Cat.find();
    res.send(newroom);
})

catRouter.get('/:id', async (req, res) => {
    const newroom = await Cat.findById(req.params.id);
    res.send(newroom);
})

catRouter.delete('/:id', async (req, res) => {
    const newroom = await Cat.findById(req.params.id);
    await newroom.deleteOne();
    res.send(newroom);
})

catRouter.post('/', async (req, res) => {
    const newroom = new Cat({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        description: req.body.description,
        maxcount: req.body.maxcount,
        phonenumber: req.body.phonenumber,
        rentperday: req.body.rentperday,
        type: req.body.type,
        img: req.body.img,
        
    })
    await newroom.save()
    res.send(newroom)
})

catRouter.patch('/:id', async (req, res) => {
    const newroom = await newroom.findById(req.params.id);

    
    newroom.Name= req.body.Name,
    newroom.description=req.body.description,
    newroom.maxcount= req.body.maxcount,
    newroom.phonenumber= req.body.phonenumber,
    newroom.rentperday= req.body.rentperday,
    newroom.type= req.body.type,
    newroom.img= req.body.img,
    await newroom.save()
    res.send(newroom)
})

module.exports = catRouter;