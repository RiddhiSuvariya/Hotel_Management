const express = require('express');
const bookingRouter = express.Router();
const mongoose = require('mongoose');
//const booking = require('../models/bookingSchema');
const bookingSchema = require('../models/bookingSchema');

// bookingRouter.post('/bookroom', async (req, res) => {
//     console.log(req.body);
//     const { name, email, contactNo, age, payment, totalRooms, checkin, checkout, members, RID } = req.body;

//     try {
//         const newBooking = new booking({ name, email, contactNo, age, payment, totalRooms, checkin, checkout, members, RID });

//         await newBooking.save();
//         console.log(newBooking);

//         return res.status(200).json({ message: 'room booked successfully' });
//     } catch (err) {
//         console.log(err);
//     }
// })

bookingRouter.get('/bookedRooms', async (req, res) => {
    try {
        const bookedRooms = await bookingSchema.find();
        res.json(bookedRooms);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

bookingRouter.post('/bookedRooms', async (req, res) => {
    // console.log(req.body);
    const { name, email, contactNo, age, payment, totalRooms, checkin, checkout, members, RID } = req.body;

    try {
        const { name, email, contactNo, age, payment, totalRooms, checkin, checkout, members, RID } = req.body;

        const newBooking = new bookingSchema({
            _id: new mongoose.Types.ObjectId(),
            
            name, email, contactNo, age, payment, totalRooms, checkin, checkout, members, RID 
        });

        await newBooking.save();
        console.log(newBooking);

        res.status(200).json({ message: 'Room booked successfully', booking: newBooking });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// bookingRouter.post('/bookedRooms', async (req, res) => {
//     console.log(req.body);
//     const { name, email, contactNo, age, payment, totalRooms, checkin, checkout, members, RID } = req.body;
//     // const { name, contactNo } = req.body;


//     try {
//         // const newBooking = new bookingSchema({ name,  contactNo });
//         const newBooking = new bookingSchema({
//             _id: new mongoose.Types.ObjectId(),
//             name: req.body.name,
//              contactNo: req.body.contactNo
//         })

//         await newBooking.save();
//         console.log(newBooking);
//         res.send(newBooking)

//         return res.status(200).json({ message: 'Room booked successfully' });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// });

bookingRouter.get('/booking/:email', async (req, res) => {
    try {
        console.log(req.params.email);
        const booking = await bookingSchema.find();

        let send = [];

        for (let i of booking) {
            if (i.email == req.params.email) {
                send.push(i);
            }
        }

        console.log(send);
        console.log(booking);
        return res.json(send);
    } catch (error) {
        console.log(error);
    }
})

module.exports = bookingRouter