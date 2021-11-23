const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const userRoute = require("./routes/UserRoute");

const authRoute = require("./routes/AuthRoute");

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("root path called");
  res.send("hello meow");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected !!");
  })
  .catch((err) => console.error("DB error", err));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});
