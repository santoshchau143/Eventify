const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const Booking = require("../models/Booking"); // optional (future)

// ==============================
// 📩 CONTACT MESSAGES
// ==============================

// ✅ GET ALL CONTACT MESSAGES
router.get("/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching messages" });
  }
});

// ✅ DELETE MESSAGE
router.delete("/messages/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ msg: "Message not found ❌" });
    }

    res.json({ msg: "Message deleted 🗑️" });

  } catch (err) {
    res.status(500).json({ msg: "Error deleting message" });
  }
});


// ==============================
// 🎟️ BOOKINGS (OPTIONAL UPGRADE)
// ==============================

// GET ALL BOOKINGS
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching bookings" });
  }
});

// DELETE BOOKING
router.delete("/bookings/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ msg: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting booking" });
  }
});

module.exports = router;