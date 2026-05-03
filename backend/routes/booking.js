const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// SAVE booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ msg: "Booking saved" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error saving booking" });
  }
});

// GET all bookings
router.get("/", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

module.exports = router;