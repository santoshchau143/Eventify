const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/event"));
app.use("/api/booking", require("./routes/booking"));
app.use("/api/payment", require("./routes/payment"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/admin", require("./routes/admin"));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/eventapp")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// server start
app.listen(5000, () => console.log("Server running on port 5000"));