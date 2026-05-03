import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./EventDetails.css";

const seats = ["A1", "A2", "A3", "B1", "B2"];

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch event from backend
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  // 🎟️ Toggle seat
  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  // 🛒 Add to cart
  const addToCart = () => {
    if (!event) {
      alert("Event not loaded ❌");
      return;
    }

    if (selected.length === 0) {
      alert("Please select at least one seat ❗");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
      eventId: event._id,
      title: event.title,
      seats: selected,
      price: event.price,
      total: event.price * selected.length,
    };

    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart ✅");
    navigate("/cart");
  };

  // 🔄 Loading state
  if (loading) {
    return <h2 className="details-container">Loading...</h2>;
  }

  // ❌ Error state
  if (!event) {
    return <h2 className="details-container">Event not found ❌</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <h2>{event.title}</h2>

        <p>{event.description || "No description available"}</p>

        <p><b>Location:</b> {event.location || "N/A"}</p>
        <p><b>Date:</b> {event.date || "N/A"}</p>
        <p><b>Price:</b> ₹{event.price || 0}</p>

        {/* 🎟️ Seat Selection */}
        <div className="seats">
          <h3>Select Seats</h3>

          <div>
            {seats.map((seat) => (
              <button
                key={seat}
                className={`seat ${
                  selected.includes(seat) ? "selected" : ""
                }`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        </div>

        {/* 💰 Total Price */}
        <p style={{ marginTop: "10px" }}>
          <b>Total:</b> ₹{event.price * selected.length}
        </p>

        {/* 🛒 Add to Cart */}
        <button className="add-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}