const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const Form = require("./models/form");

// mongoose.connect("mongodb://localhost:27017/node-api-101", {
//   useNewUrlParser: true,
// });

mongoose.connect("mongodb://mongo:27017/docker-node-mongo", {
  useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/forms", async (req, res) => {
  const forms = await Form.find({});
  res.json(forms);
});

const forms = [{}];
app.post("/forms", async (req, res) => {
  const payload = req.body;
  const form = new Form(payload);
  await form.save();
  res.status(201).end();
});

app.listen(9000, () => {
  console.log("Application is running on port 9000");
});
