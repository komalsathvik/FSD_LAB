const express = require("express");
const app = express();
const PORT = 9000;
const User = require("./models/UserSchema");
const mongoose = require("mongoose");
app.use(express.json());

function initDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/react-prac")
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err);
    });
}
app.get("/", (req, res) => {
  res.json({ message: "get request" });
});

app.post("/login", (req, res) => {
  const name = req.body.username;
  const pass = req.body.password;
  const newUser = User.create({
    username: name,
    password: pass,
  });
  res.status(201).json({ message: "inserted into db succesfully" });
});

app.listen(PORT, () => {
  initDB();
  console.log(`server is running on PORT ${PORT}`);
});
