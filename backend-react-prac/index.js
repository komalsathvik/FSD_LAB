const express = require("express");
const app = express();
const PORT = 9000;
const User = require("./models/UserSchema");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
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
  res.json({ message  : "get request" });
});

app.post("/signup", (req, res) => {
  const name = req.body.username;
  const pass = req.body.password; 
  const newUser = User.create({
    username: name,
    password: pass,
  }); 
  res.status(201).json({ message: "inserted into db succesfully" });
});

app.post("/login", async (req, res) => {
  const name = req.body.username;
  const pass = refq.body.password;
  const user = await User.findOne({ username: name });
  console.log(user);
  if (pass === user.password) {
    return res.json({ message: "verified", success: true });
  } else {
    res.status(201).json({ message: "incorrect password", success: false });
  }
});



app.listen(PORT, () => {
  initDB();
  console.log(`server is running on PORT ${PORT}`);
}); 