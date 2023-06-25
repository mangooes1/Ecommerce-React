const express = require('express');
const app = express();
const port= 5000
app.use('/api/', require("./Routes/CreateUser"));
// const mongoose = require('mongoose');
// require("./db");
const connectToMongoDB = require('./db');

// Call the function to connect to MongoDB
connectToMongoDB();

// mongodb();
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use(express.json());

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})