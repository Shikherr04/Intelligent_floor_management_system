const express = require('express');
const cors = require('cors');
const CookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(CookieParser());

app.use(cors({
    credentials : true,
    origin : 'http://localhost:5173'
}));

mongoose.connect(process.env.MONGO_URL)
    .then((db) => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("error ocurred");
    })


app.listen(PORT , ()=>{
    console.log(`Server started on Port ${PORT} `);
});

app.get('/test' , (req , res)=>{
    res.json('test ok');
});

app.get('/' , (req, res) => {
    console.log("Server is running");
});

//register end point

app.post('/register' , async (req , res)=>{
    const {name , email , password} = req.body;
    try{
        const userDoc = await User.create({
            name,
            email,
            password : bcrypt.hashSync(password , bcrypt.genSaltSync(10))
        });

        if(userDoc){
            res.status(200).json({success : true});
        }
        else{
            res.status(400).json({success : false});
        }
    }
    catch(err){
        res.status(422).send(err);
    }
})

//login end point
app.post('/login' , async (req , res) => {
    const {email , password} = req.body;
    try{
        const userDoc = await User.findOne({email});
        console.log(userDoc);
        if(userDoc){
            const passOk = bcrypt.compareSync(password , userDoc.password);
            
            if(passOk){
                //create token and send it to the client
                jwt.sign({
                    email : userDoc.email , 
                    id : userDoc._id
                    }, process.env.JWT_SECRET , {} , (err ,token)=>{
                    if(err) throw err;
                    res.cookie('token' , token).json({name : userDoc.name , success : true});
                });
            }
            else{
                res.json({data : null , success : true , message : "password is incorrect"});
            }
        }
    }
    catch(err){
        res.json(422).json(err);
    }
});

