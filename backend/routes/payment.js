const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: "rzp_test_SkmKGXrKPtmzjc",      // ✅ YOUR KEY
  key_secret: "WRpbRBkhR0EPwzQM0eZOGJaE",      // ✅ YOUR SECRET
});

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt#1",
    });

    res.json(order);

  } catch (err) {
    console.log("RAZORPAY ERROR:", err);
    res.status(500).json({ msg: "Payment error" });
  }
});

module.exports = router;