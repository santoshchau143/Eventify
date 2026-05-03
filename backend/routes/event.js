const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// 🔹 GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find(); // 🔥 data from MongoDB
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// 🔹 GET single event
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;