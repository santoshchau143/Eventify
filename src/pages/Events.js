import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // 🔥 Fetch events
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔐 HANDLE BOOK NOW (LOGIN CHECK)
  const handleBookNow = (id) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Please login to book tickets ❗");
      navigate("/login");
      return;
    }

    navigate(`/event/${id}`);
  };

  // 👁️ VIEW DETAILS (no login needed)
  const handleViewDetails = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="page">
      <h1>Events</h1>
      <p>Explore and book your favorite events.</p>

      <div className="events-container">
        {events.map((event) => (
          <div key={event._id} className="event-card">

            {/* Image */}
            <img
              src={event.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08ZW9iqmVJ5lqq2ZZwCI18CJI3ePMtpnFmA&s"}
              alt={event.title}
            />

            {/* Details */}
            <h3>{event.title}</h3>
            <p>{event.date || "Coming Soon"}</p>
            <p>{event.location || "Location TBD"}</p>
            <p className="price">₹{event.price || 0}</p>

            {/* Buttons */}
            <div className="event-actions">
              <button
                className="book-btn"
                onClick={() => handleBookNow(event._id)}
              >
                Book Now
              </button>

              <button
                className="view-btn"
                onClick={() => handleViewDetails(event._id)}
              >
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="about-footer">
        <p>© 2026 Eventify | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Events;