const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const Rooms = require('./models/Rooms');
// import { useState,useEffect } from "react";


mongoose.connect('mongodb+srv://Riddhi15:riddhi15@cluster0.cr8movx.mongodb.net/Rooms',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Hii");
        const app = express();
        const allowedOrigins=['http://localhost:3000']
        app.use(
            cors(
                {
                    origin: function (origin, callback) {
                        if (!origin || allowedOrigins.includes(origin)) {
                            callback(null, true);
                        }
                        else {
                            callback(new Error('Not Allowed by CORS'));
                        }
                    },
                    credentials: true,
                }
            )
        );
        app.use(cookieParser());
        app.use(bodyParser.json())
        app.get("/", (req, res) => {
            console.log("Node Works!!!");
        })
        app.get("/Rooms", async (req, res) => {
            const room = await Rooms.find();
            res.send(room)
        })

        app.get("/Rooms/:id", async (req, res) => {
            const room = await Rooms.findOne({ _id: req.params.id });
            res.send(room)
        })

        app.delete('/Rooms/:id', async (req, res) => {
            const room = await Rooms.findOne({ _id: req.params.id });
            await room.deleteOne();
            res.send(room)
        })
        app.post('/Rooms', async (req, res) => {
            console.log(req.body);
            const room = new Rooms({
                _id: new mongoose.Types.ObjectId(),
                Name: req.body.Name,
                maxcount: req.body.maxcount,
                phonenumber: req.body.phonenumber,
                rentperday: req.body.rentperday,
                img: req.body.img,
                description: req.body.description
            })
            await room.save();
            res.send(room)
        })

        app.patch('/Rooms/:id', async (req, res) => {
            console.log(req.body);
            const room = await Rooms.findOne({ _id: req.params.id });
            room.Name = req.body.Name;
            room.maxcount = req.body.maxcount;
            room.phonenumber = req.body.phonenumber;
            room.rentperday = req.body.rentperday;
            room.img = req.body.img;
            room.description = req.body.description;
            await room.save();
            res.send(room);
        })

        app.listen(3070, () => {
            console.log("start server 3070")
            console.log("http://localhost:3070/Rooms")
        })
    })


    //---------
    