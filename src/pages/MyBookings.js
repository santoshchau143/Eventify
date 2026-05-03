import { useEffect, useState } from "react";
import axios from "axios";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/booking");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Bookings 🎟️</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet ❌</p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking._id} // ✅ better key
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
              background: "#f9f9f9",
            }}
          >
            <h3>Booking ID: {booking._id}</h3>

            {booking.items.map((item, i) => (
              <div key={i}>
                <p><b>Event:</b> {item.title}</p>

                <p>
                  <b>Seats:</b>{" "}
                  {item.seats ? item.seats.join(", ") : "N/A"}
                </p>

                <p>
                  <b>Price:</b> ₹
                  {item.total || item.price * (item.seats?.length || 1)}
                </p>
              </div>
            ))}

            <hr />

            <h4>Total Paid: ₹{booking.total}</h4>

            <p style={{ fontSize: "12px", color: "gray" }}>
              Payment ID: {booking.paymentId}
            </p>
          </div>
        ))
      )}
    </div>
  );
}