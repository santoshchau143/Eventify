const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      eventId: String,
      title: String,
      seats: [String],
      price: Number,
    },
  ],
  total: Number,
  paymentId: String,
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);