const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");


// ✅ SAVE MESSAGE
router.post("/", async (req, res) => {
  try {
    let { name, email, message } = req.body;

    // 🔥 Validation
    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields are required ❗" });
    }

    name = name.trim();
    email = email.trim().toLowerCase();
    message = message.trim();

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.json({ msg: "Message sent successfully ✅" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


// ✅ GET ALL MESSAGES (latest first)
router.get("/", async (req, res) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching messages" });
  }
});


// ✅ DELETE MESSAGE (for admin)
router.delete("/:id", async (req, res) => {
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


module.exports = router;