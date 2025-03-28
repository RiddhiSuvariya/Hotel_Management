const express = require("express");
const app =express();


const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../Backend/models/User');
const cors = require("cors")
const cookieParser = require("cookie-parser");
const bookingRouter = require("./routes/bookingRouter");

// const app = express();


mongoose.connect('mongodb+srv://Riddhi15:riddhi15@cluster0.cr8movx.mongodb.net/Rooms', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  ()=>{
    const app = express();

        const allowedOrigins = ['http://localhost:3000'];

        app.use(
            cors({
                origin: function (origin, callback) {
                    if (!origin || allowedOrigins.includes(origin)) {
                        callback(null, true);
                    } else {
                        callback(new Error('Not allowed by CORS'));
                    }
                },
                credentials: true,
            })
        );
        app.use(cookieParser());

        app.use(bodyParser.json());

        app.use(cors({origin: true, credentials: true}));
        app.use('/Rooms',bookingRouter);

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ Name:username, password });
  await newUser.save();
  res.json({ message: 'User signed up successfully' });
});

app.post('/Login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ Name:username, password });
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


app.get('/Login',async(req,res)=>{
  const user= await User.find()
  res.send(user);
})

app.get('/signup',async(req,res)=>{
  const user= await User.find()
  res.send(user);
})


app.listen(9000, () => {
  console.log('Server running on port 9000');
})

})