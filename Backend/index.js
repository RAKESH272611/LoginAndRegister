const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/LoginRegister',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Error connecting to database",err);
});


app.get("/",(req,res)=>{
    res.send("My API");
})

app.listen(5000,()=>{
    console.log("server running at port 5000");
})