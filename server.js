const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/quickbyte");

const Food = mongoose.model("Food", {
  name: String,
  price: Number
});

/* ADD FOOD */
app.post("/addFood", async (req, res) => {
  const food = new Food(req.body);
  await food.save();
  res.send("Food Added");
});

/* GET FOOD */
app.get("/foods", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

app.listen(5000, () => console.log("Server running"));