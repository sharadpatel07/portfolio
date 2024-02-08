const express = require('express');
const app = express();
const port = 1807;
const User = require("./model/user");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/signForm")
.then(()=>{
    console.log("connected")
})
.catch((error)=>{
    console.log("error: ", error)
})
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.post('/signIn' , async(req,res)=>{
    const user = await User(req.body);
    user.save();
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})