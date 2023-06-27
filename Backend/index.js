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

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model('User',userSchema);

app.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.findOne({ email }).exec();
      if (user) {
        res.send({ message: "User already Registered" });
      } else {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.send({ message: "Successfully Registered" });
      }
    } catch (error) {
      res.send(error);
    }
  });


app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).exec();
      if (user) {
        if(password===user.password)
        res.send({ message: "Login Successfull"});
        else
        res.send({message: "Password didn't match"})
      } else {
        res.send({ message: "User not registered" });
      }
    } catch (error) {
      res.send(error);
    }
  });

app.listen(5000,()=>{
    console.log("server running at port 5000");
})