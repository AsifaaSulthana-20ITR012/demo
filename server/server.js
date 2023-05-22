const express = require("express");
const app = express();
const multer = require('multer')
const bodyParser = require("body-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require('fs')
const ImageModell = require("./Models/nodeModel")
const UserModel = require("./Models/signupModel")
const GiftModel=require("./Models/gift");


app.use(cors());
app.use(bodyParser.urlencoded({limit:"50mb", extended: true,parameterLimit:500000 }));
app.use(bodyParser.json({limit:"50mb"}));

//connect to mongoose
// mongoose.connect("mongodb+srv://fahima:passpass@cluster0.oz07pn2.mongodb.net/foodda")
mongoose.connect("mongodb+srv://ASIFAA:asifaa@cluster0.nefz76b.mongodb.net/fine_foods")
.then(()=>console.log("connected"))
.catch(err=>console.log(err.message))

app.post("/upload", async(req, res) => {
  // res.send(req.file);
  console.log(req.body) 
  try {
    const saveImage =new  ImageModell({
      foodName: req.body.foodName,
      image: req.body.image,
      desc: req.body.desc,
      price: req.body.price
    });
    await saveImage.save()
    res.status(200).json({message:"Success"})
    
  } catch (error) {
      res.status(500).send(error.message)
  }
   
});

// adding gift
app.post("/uploadGift",async (req, res) => {
  // res.send(req.file); 
  const saveGift = new GiftModel({
    foodName: req.body.foodName,
    image: req.body.image,
    desc: req.body.desc,
    price: req.body.price
  });
  await saveGift.save()
    .then((res) => {
      console.log("gifts added to db");
    })
    .catch((err) => {
      console.log(err, "Error!!! Try again");
    });
  res.send('Image saved success')
});

// fetching products
app.get('/fetch', async (req, res) => {
  const allData = await ImageModell.find()
  res.json(allData)
})
app.get('/fetchGift', async (req, res) => {
  const allData = await GiftModel.find()
  res.json(allData)
})

app.get('/fetchUser', async (req, res) => {
  const allData = await UserModel.find()
  res.json(allData)
})

app.post("/uploadSignup", async(req, res) => {
  const saveSignupData =new UserModel({
    name: req.body.name,
    uname: req.body.uname,
    email: req.body.email,
    password: req.body.password
  });
  await saveSignupData
    .save()
    .then((res) => {
      console.log("Signup Data is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
  res.send('Signup data is saved')
});


app.listen(5000, () => {
  console.log("Express server is running on port 5000");
});


