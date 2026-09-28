const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Mock user
const user = {
  email: "narmi123@gmail.com",
  password: "narmi123"
};


// Login API

app.post("/login", function (req, res) {

  if (
    req.body.emailid === user.email &&
    req.body.password === user.password
  ) {
    res.send(true);
  } else {
    res.send(false);
  }
})





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



