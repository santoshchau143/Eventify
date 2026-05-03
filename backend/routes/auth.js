const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// REGISTER
router.post("/register", async (req, res) => {
  let { username, email, phone, DOB, password } = req.body;

  if (!username || !email || !phone || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  email = email.trim().toLowerCase();
  username = username.trim();
  phone = phone.replace(/\D/g, ""); // normalize

  try {
    const exist = await User.findOne({
      $or: [{ email }, { username }, { phone }],
    });

    if (exist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      phone,
      DOB,
      password: hash,
    });

    await user.save();

    res.json({ msg: "Registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// LOGIN (email OR phone)
router.post("/login", async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    // 🔥 find user using email OR phone
    const user = await User.findOne({
      $or: [
        { email: emailOrPhone },
        { phone: emailOrPhone },
      ],
    });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Wrong password" });
    }

    // ✅ remove password
    const { password: _, ...userData } = user._doc;

    res.json({ msg: "Login success", user: userData });

  } catch (err) {
    console.log(err); // 🔥 debug
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;